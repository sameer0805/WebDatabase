from flask import Flask, request, jsonify
app = Flask(__name__)
from pymodm import connect
from pymodm import MongoModel, fields

connect("mongodb://localhost:27017/bme590")

# class User(MongoModel): ## template for an entry
#    email = fields.EmailField(primary_key=True)
#    first_name = fields.CharField()
#    last_name = fields.CharField()
# u = User('user1@email.com', last_name='Ross', first_name='Bob')
# u.save()

class User(MongoModel):
    Name = fields.CharField()
    Age = fields.CharField()
    BMI = fields.CharField()

@app.route("/new_patient", methods = ['POST'])
def newpatient():
    data = request.get_json()
    Name = data['Name']
    Age = data['Age']
    BMI = data['BMI']
    u = User(Name, Age, BMI)
    u.save()
    return jsonify(u)


