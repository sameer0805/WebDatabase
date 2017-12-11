import numpy as np
import cv2
import matplotlib.pyplot as plt

def colorplot(imagepath, save_variable = 1, save_file_title = 'histogram',save_file_type = '.jpg'):
    im = cv2.imread(imagepath)
    colorimage = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
    # hist = cv2.calcHist([colorimage], [0], None, [256], [0, 256])
    # plt.plot(hist)

    ## need to reshape the image to be a list of pixels
    colorimage = colorimage.reshape((colorimage.size, 1))
    imdata = np.float32(colorimage)

    ## setting the criteria for the algorithm
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)

    ## how are initial centers taken
    flags = cv2.KMEANS_RANDOM_CENTERS

    compactness, labels, centers = cv2.kmeans(imdata,2,None,criteria,10,flags)
    A = imdata[labels==0]
    B = imdata[labels==1]
    plt.hist(A,256,[0,256],color = 'r')
    plt.hist(B,256,[0,256],color = 'b')
    plt.hist(centers,32,[0,256],color = 'y')
    plt.xlabel('Pixel Value')
    plt.ylabel('Intensity')
    plt.title('Color Histogram')
    plt.show()

    if save_variable == 1:
        save_file_name = save_file_title + save_file_type
        saved = plt.savefig(save_file_name)
        plt.show()
        return saved
    else:
        plt.show()

# plt.hist(imdata,256,[0,256])
# plt.show()

# colorimage = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
# plt.imshow(colorimage)
# plt.colorbar()
# plt.show()