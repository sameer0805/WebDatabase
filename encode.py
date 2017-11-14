import base64

def encode_image_string(filename):
    with open (filename,"rb") as image_file: # opens up a file and reads it as binary
        image_string = base64.b64encode(image_file.read())
        print image_string

def save_image_string(base64image, filename):
    with open (filename,"wb") as image_out: # opening up a file and writing some bytes
        image_out.write(base64.b64decode(base64image))

