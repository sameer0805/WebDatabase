from pymodm import connect
from pymodm import MongoModel, fields

connect("mongodb://localhost:27017/bme590")

class User(MongoModel):
    email = fields.EmailField(primary_key=True)
    first_name = fields.CharField()
    last_name = fields.CharField()

u = User('user1@email.com', last_name='Ross', first_name='Bob')
u.save()

