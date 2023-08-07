import pandas as pd

from main import db
from main.models import User, ProfessionalCourse, SpecificCourse, GeneralCourse, License

db.drop_all()
db.create_all()