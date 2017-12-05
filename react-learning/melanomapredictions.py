from get_prediction import get_prediction
import matplotlib.image as mpimg
import matplotlib.pyplot as plt

img = mpimg.imread(# this needs to be a string, URL, python object)



print("img type:", type(img))
print("img shape:", img.shape)

(labels, predictions) = get_prediction(img)
print("\n\nPredictions:")
print(labels)
print (predictions)