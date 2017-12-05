from bme590_melanoma_prediction.get_prediction import get_prediction
import matplotlib.image as mpimg
import matplotlib.pyplot as plt

img = mpimg.imread('/Users/sammyp/Desktop/Melanoma.jpg')
print("img type:", type(img))
print("img shape:", img.shape)
(labels, predictions) = get_prediction(img)
print("\n\nPredictions:")
print(labels)
print (predictions)

