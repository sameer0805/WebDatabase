def contour(imagepath, thresh_val=175, contour_count=5,
            contour_file_title='contour', save_file_type='.jpg'):
    import numpy as np
    import cv2
    import base64
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    # im = cv2.imread('/Users/Ben/Desktop/melanoma.jpg')
    im = cv2.imread(imagepath)
    imgray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    ret, thresh = cv2.threshold(imgray, thresh_val, 255, cv2.THRESH_BINARY)
    FilteredImage = cv2.GaussianBlur(thresh, (5, 5), 0)
    # edged = cv2.Canny(FilteredImage,100,200)
    contours, hierarchy = cv2.findContours(
        FilteredImage.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key=cv2.contourArea,
                      reverse=True)[1:contour_count]
    cv2.drawContours(im, contours, -1, (0, 255, 0), 3)
    contour_file_name = contour_file_title + ".jpg"
    # cv2.imwrite(contour_file_name, img)
    # plt.imshow(img)
    plt.imsave(fname=contour_file_name, arr=im)
    # plt.savefig(contour_file_name)
    # plt.show()

    contour_string = base64.b64encode(open(contour_file_name, 'rb').read())
    return contour_string