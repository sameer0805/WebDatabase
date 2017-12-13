from flask import Flask, request, jsonify
from flask_cors import CORS
from time import gmtime, strftime
import base64
import re
import numpy as np
from setup_db import User, write_file
from melanomapredictions import predict
import sys
sys.path.insert(0,'/notebooks/react-learning/')
sys.path.insert(0,'/notebooks/react-learning/melcolor.py')
from meldiameter import contour
from melcolor import colorplot

app = Flask(__name__)
CORS(app)

def determine_filepath(img_string):
    filename = strftime("%Y%m%d_%H_%M_%S", gmtime())
    PATH = "images/"
    check_jpg = re.search("^data:image/jpeg", img_string)
    if (check_jpg != None):
	    file_ending = ".jpg"
    else:
        check_png = re.search("^data:image/png", img_string)
        if (check_png != None):
            file_ending = ".png"
        else:
            check_gif = re.search("^data:image/gif", img_string)
            if (check_gif != None):
                file_ending = ".gif"
            else:
                error_string = "Error: Incorrect file type uploaded"
                return error_string
    filepath = PATH + filename + file_ending
    filepath_without_end = PATH + filename
    return filepath, filepath_without_end, file_ending

@app.route('/test')
def hello_world():
    return 'Hello, world2'

@app.route('/', methods=['POST'])
def validate():
    img = request.get_json()
    image_string = img['image']
    filepath, filepath_without_end, file_ending = determine_filepath(image_string)
    with open (filepath, "w") as image_out:
        image_out.write(re.sub('^data:image/.+;base64,', '', image_string).decode('base64'))
    labels, predictions = predict(filepath)
    name = "test"
    predict2 = predictions.tolist()
    labels2 = str(labels)
    predict3 = np.array(predict2)
    predict4 = np.round(predict3, 3)
    predict5 = str(predict4)
    colorplot_path = filepath_without_end + "_colorhistorgram.jpg"
    colorplot_img_string = colorplot(filepath, "histogram", ".jpg")
    contour_img_string = contour(filepath, 175, 5, "contour",".jpg")
    colorplot_img_post = "data:image/jpeg;base64," + colorplot_img_string
    results = {"labels": labels2, "probabilities": predict5, "contour": colorplot_img_post,
               "colorplot": colorplot_img_post}
    return jsonify(results)
	#write_file(name,file_ending,filepath,malignant,benign,symmetry,border,color,diameter)
