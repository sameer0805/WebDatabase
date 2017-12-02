from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route("/api/image_data", methods=['POST'])
def imagesummary():

