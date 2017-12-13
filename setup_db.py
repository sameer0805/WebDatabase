from pymodm import connect
from pymodm import MongoModel, fields

connect("mongodb://vcm-1853.vm.duke.edu:27017/WebDatabase")


class User(MongoModel):
    name = fields.CharField(primary_key=True)
    file_type = fields.CharField()
    file_path = fields.CharField()
    malignant = fields.FloatField()
    benign = fields.FloatField()


def write_file(name, type, path, malignant, benign):
    connect("mongodb://vcm-1853.vm.duke.edu:27017/WebDatabase")
    u = User(name=name, file_type=type, file_path=path, malignant=malignant,
             benign=benign)
    u.save()
