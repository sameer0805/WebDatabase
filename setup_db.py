from pymodm import connect
from pymodm import MongoModel, fields
connect("mongodb://vcm-1853.vm.duke.edu:27017/MelanomaDatabase")


class User(MongoModel):
	name = fields.CharField(primary_key=True)
	birthdate = fields.CharField()
	button = fields.CharField()
	file_type = fields.CharField()
	file_path = fields.CharField()
	malignant = fields.FloatField()
	benign = fields.FloatField()


def write_file(name, date, button, type, path, malignant, benign):
	connect("mongodb://vcm-1853.vm.duke.edu:27017/MelanomaDatabase")
	u = User(name=name, date=date, button=button, file_type=type, file_path=path,
			 malignant=malignant, benign=benign)
	u.save()
