def contour(imagepath,thresh_val = 175, contour_count = 5):
    import numpy as np
    import cv2
    import base64
    #im = cv2.imread('/Users/Ben/Desktop/melanoma.jpg')
    im = cv2.imread(imagepath)
    imgray = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
    ret,thresh = cv2.threshold(imgray,thresh_val,255,cv2.THRESH_BINARY)
    FilteredImage = cv2.GaussianBlur(thresh,(5,5),0)
    #edged = cv2.Canny(FilteredImage,100,200)
    image, contours, hierarchy = cv2.findContours(FilteredImage.copy(),cv2.RETR_TREE                                                                                               ,cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key = cv2.contourArea, reverse = True)[1:contour_count]
    img = cv2.drawContours(im, contours, -1, (0,255,0), 3)
    return img

    cv2.imshow('Image with Filtering and Edge Detection', img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
