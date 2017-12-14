from gcr.io/tensorflow/tensorflow:latest
RUN pip install Flask
RUN pip install -U flask-cors
RUN pip install -U pytest
RUN pip install pytest-cov
RUN pip install pymodm
RUN apt-get update
RUN apt-get install python-tk -y
RUN apt-get install libopencv-dev python-opencv -y
ENV FLASK_APP=main.py
