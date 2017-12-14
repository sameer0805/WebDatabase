from main import determine_filepath, validate, analyze_image
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


def test_filetype():
    decoded_jpg = "data:image/jpeg;base64," + \
                  base64.b64encode(open("test_images/test_jpgfile.jpeg",
                                        'rb').read())
    decoded_png = "data:image/png;base64" + \
                  base64.b64encode(open("test_images/test_pngfile.png",
                                        'rb').read())
    decoded_bmp = "data:image/bmp;base64" + \
                  base64.b64encode(open("test_images/test_bmpfile.bmp",
                                        'rb').read())
    decoded_wrong = "data:image/gif;base64" + \
                    base64.b64encode(open
                                     ("test_images/test_file_incorrect.gif",
                                      'rb').read())
    filepath_jpg, filepath_without_end_jpg, file_ending_jpg = \
        determine_filepath(decoded_jpg)
    filepath_png, filepath_without_end_png, file_ending_png = \
        determine_filepath(decoded_png)
    filepath_bmp, filepath_without_end_bmp, file_ending_bmp = \
        determine_filepath(decoded_bmp)
    filepath_gif, filepath_without_end_gif, file_ending_gif = \
        determine_filepath(decoded_wrong)
    assert file_ending_jpg == ".jpg"
    assert file_ending_png == ".png"
    assert file_ending_bmp == ".bmp"
    assert file_ending_gif == ""


def test_validate():
    image_string = "data:image/jpeg;base64," + base64.b64encode(
        open("test_images/Melanoma.jpg", 'rb').read())
    filepath = "test_images/Melanoma.jpg"
    filepath_without_ending = "Melanoma"
    file_ending = ".jpg"
    results = analyze_image(filepath, filepath_without_ending,
                            file_ending, image_string)
    probabilities = results["probabilities"]
    assert probabilities[0] == 0.732
    assert probabilities[1] == 0.268


def test_null_result():
    decoded_wrong = "data:image/gif;base64" + \
                    base64.b64encode(open(
                        "test_images/test_file_incorrect.gif", 'rb').read())
    filepath_gif, filepath_without_end_gif, file_ending_gif = \
        determine_filepath(decoded_wrong)
    results = analyze_image(filepath_gif, filepath_without_end_gif,
                            file_ending_gif, decoded_wrong)
    assert results["labels"] == "Error: Incorrect file type uploaded"
    probabilities = results["probabilities"]
    assert probabilities[0] == "Error"
    assert probabilities[1] == "Incorrect file type"
