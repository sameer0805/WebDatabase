def colorplot(imagepath = '/Users/Ben/Desktop/melanoma.jpg', save_file_title = 'histogram',save_file_type = '.jpg'):
    import numpy as np
    import base64
    import cv2
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
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

    compactness, labels, centers = cv2.kmeans(imdata,2,criteria,10,flags)
    A = imdata[labels==0]
    B = imdata[labels==1]
    fig = plt.figure(1)
    fig.add_subplot(111)
    plt.hist(A,256,[0,256],color = 'r')
    plt.hist(B,256,[0,256],color = 'b')
    plt.hist(centers,32,[0,256],color = 'y')
    plt.xlabel('Pixel Value')
    plt.ylabel('Intensity')
    plt.title('Color Histogram')
    #save_file_title = 'histogram'
    #save_file_type = '.jpg'
    save_file_name = save_file_title + save_file_type
    plt.savefig(save_file_name)
    plt.show()

    plot_string = base64.b64encode(open(save_file_name,'rb').read())
    return plot_string
    #decoded_string = base64.b64decode(plot_string)
    #result = open('decodedimage.jpg','wb')
    #result.write(decoded_string)

