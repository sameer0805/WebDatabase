import numpy as np
import cv2

im = cv2.imread('/Users/sammyp/Desktop/Melanoma.jpg')
imgray = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
ret,thresh = cv2.threshold(imgray,127,255,0)
FilteredImage = cv2.GaussianBlur(thresh,(5,5),0)
edged = cv2.Canny(FilteredImage,100,200)
image, contours, hierarchy = cv2.findContours(edged,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
img = cv2.drawContours(im, contours, -1, (0,255,0), 3)


cv2.imshow('Image with Filtering and Edge Detection', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

area = cv2.contourArea(contours)
diameter = np.sqrt(4*area/np.pi)
