from flask import Flask, request, jsonify
from flask_cors import CORS
from time import gmtime, strftime
import base64
import re
import numpy as np
from setup_db import User, write_file
from melanomapredictions import predict
import sys
sys.path.insert(0, '/notebooks/react-learning/')
sys.path.insert(0, '/notebooks/react-learning/melcolor.py')
from meldiameter import contour
from melcolor import colorplot

app = Flask(__name__)
CORS(app)


def determine_filepath(img_string):
    """
    This method takes a base64 image string (of the user-inputted melanoma image) and creates a file path from it.
    Currently, it can account for .jpg, .png., and .bmp file types robustly.
    :param img_string: the encoded base64 string of the user-inputted image
    :return: The method returns the following: filepath, a distinct file path for each image;
        filepath_without_end, same as filepath without the file type designation;
        file_ending, the file type of the image.
    """
    filename = strftime("%Y%m%d_%H_%M_%S", gmtime())
    PATH = "images/"
    check_jpg = re.search("^data:image/jpeg", img_string)
    if (check_jpg is not None):
        file_ending = ".jpg"
    else:
        check_png = re.search("^data:image/png", img_string)
        if (check_png is not None):
            file_ending = ".png"
        else:
            check_gif = re.search("^data:image/bmp", img_string)
            if (check_gif is not None):
                file_ending = ".bmp"
            else:
                file_ending = ""
    filepath = PATH + filename + file_ending
    filepath_without_end = PATH + filename
    return filepath, filepath_without_end, file_ending


def analyze_image(filepath, filepath_without_end, file_ending, image_string):
    """
    This method takes the user-inputted image and provides analysis, including prediction of likelihood of malignancy,
    the user-inputted image superimposed with an outlining of the melanoma contour, and a color histogram of the
    intensities (frequencies) associated with each pixel value in gray scale.
    :param filepath: distinct location of each image
    :param filepath_without_end: distinct location of each image (excludes file type)
    :param file_ending: the type designation of file
    :param image_string: the base64 string of inputted image
    :return: The method outputs a dict entitled "results" containing the labels (benign and malignant), probabilities
    associated with each, and the base 64 strings of the contour superimposed melanoma image and color histogram
    respectively.
    """
    if file_ending == "":
        labels2 = "Error: Incorrect file type uploaded"
        predict5 = ["Error", "Incorrect file type"]
        contour_img_post = ""
        colorplot_img_post = ""
    else:
        with open(filepath, "w") as image_out:
            image_out.write(re.sub('^data:image/.+;base64,', '',
                                   image_string).decode('base64'))
        labels, predictions = predict(filepath)
        name = "test"
        predict2 = predictions.tolist()
        labels2 = str(labels)
        predict3 = np.array(predict2)
        predict4 = np.round(predict3, 3)
        predict5 = predict4.tolist()
        colorplot_path = filepath_without_end + "_colorhistorgram.jpg"
        colorplot_img_string = colorplot(filepath, "histogram", ".jpg")
        contour_img_string = contour(filepath, 175, 5, "contour", ".jpg")
        colorplot_img_post = "data:image/jpeg;base64," + colorplot_img_string
        contour_img_post = "data:image/jpeg;base64," + contour_img_string
    results = {"labels": labels2, "probabilities": predict5,
               "contour": contour_img_post, "colorplot": colorplot_img_post}
    return results


@app.route('/test')
def hello_world():
    return 'Hello, world2'


@app.route('/', methods=['POST'])
def validate():
    """
    This method takes inputs from the front end, uses the methods determine_filepath and analyze_image to create a file
    path and provide analysis (malignancy predictions, border identification, color intensity), then posts analysis
    results as a json for the front end. Additionally, it creates a database entry encompassing user information,
    file path and type, and malignancy probabilities.
    :return: Results of analysis (labels, probabilities, contour, colorplot) in json form.
    """
    img = request.get_json()
    image_string = img['image']
    name = img['name']
    date = img['date']
    button = img['button']
    filepath, filepath_without_end, file_ending = \
        determine_filepath(image_string)
    results = analyze_image(filepath, filepath_without_end,
                            file_ending, image_string)
    probabilities = results["probabilities"]
    malignant = probabilities[1]
    benign = probabilities[0]
    return jsonify(results)
    write_file(name, date, button, file_ending, filepath, malignant, benign)
