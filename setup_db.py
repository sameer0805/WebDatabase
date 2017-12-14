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
	"""
	This method takes an assortment of inputs (name, date, button, type, path, malignant, benign), connects to a mongodb
	database on a Duke VM, and saves an entry in the database of the inputs.
	:param name: Name of user
	:param date: Date inputted
	:param button: Gender of user
	:param type: File type designation
	:param path: File path
	:param malignant: Probability of "malignant" designation
	:param benign: Probability of "benign" designation
	:return: Does not output anything, but saves a database entry of input parameters.
	"""
	connect("mongodb://vcm-1853.vm.duke.edu:27017/MelanomaDatabase")
	u = User(name=name, date=date, button=button, file_type=type, file_path=path,
			 malignant=malignant, benign=benign)
	u.save()
