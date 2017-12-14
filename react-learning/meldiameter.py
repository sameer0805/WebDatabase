def contour(imagepath, thresh_val=175, contour_count=5,
            contour_file_title='contour', save_file_type='.jpg'):
    """
    This method takes an image input of a melanoma and draws what it believes to be the contour of the image.
     Subsequently, it takes the image with the contour and encodes it into a base64 string to be sent to the front end.
     It utilizes the openCV library to perform image processing.
    :param imagepath: The image to be inputted for contour drawing.
    :param thresh_val: This value is the threshold value used to classify pixel values.
    :param contour_count: This value is the amount of algorithm-calculated contours the user would like displayed on
        their image. It will display the largest [contour_count] contours by area on the image. Ex. if the contour_count
        is three, the function will display the three largest contours.
    :param contour_file_title: This is the desired name of the file.
    :param save_file_type: This is the desired file type.

    :return: This method returns a base64 string of the original image overlayed with contours of the melanoma.
    """

    import numpy as np
    import cv2
    import base64
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt

    #im = cv2.imread('/Users/Ben/Desktop/melanoma.jpg')
    im = cv2.imread(imagepath)
    imgray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    ret, thresh = cv2.threshold(imgray, thresh_val, 255, cv2.THRESH_BINARY)
    FilteredImage = cv2.GaussianBlur(thresh, (5, 5), 0)
    #edged = cv2.Canny(FilteredImage,100,200)
    contours, hierarchy = cv2.findContours(FilteredImage.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[1:5]
    cv2.drawContours(im, contours, -1, (0, 255, 0), 3)

    contour_file_name = contour_file_title + ".jpg"
    # cv2.imwrite(contour_file_name, img)
    # plt.imshow(img)
    plt.imsave(fname=contour_file_name, arr=im)
    # plt.savefig(contour_file_name)
    # plt.show()

    contour_string = base64.b64encode(open(contour_file_name, 'rb').read())
    return contour_string