from get_prediction import get_prediction
import matplotlib.image as mpimg
# import matplotlib.pyplot as plt


def predict(image):
    """
    This method takes an image input and returns probabilities of malignancy.
    :param image: image file inputted by user
    :return: labels: benign, malignant;
        predictions: probabilities associated with benign and malignant
    """
    img = mpimg.imread(image)
    # print("img type:", type(img))
    # print("img shape:", img.shape)
    labels, predictions = get_prediction(img)
    return labels, predictions
# print("\n\nPredictions:")
# print(labels)
# print (predictions)
