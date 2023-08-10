import pandas as pd
from main import db

db.drop_all()
db.create_all()