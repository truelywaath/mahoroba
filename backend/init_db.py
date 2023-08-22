import pandas as pd
from main.models import Area
from main import db

db.drop_all()
db.create_all()

area_dtypes = {
    'エリア区分': str,
    'エリア': str,
}

df = pd.read_csv("./csv/area.csv", dtype=area_dtypes)
for index, row in df.iterrows():
    area_record = Area(
        division = row['エリア区分'],
        area = row['エリア']
    )
    db.session.add(area_record)

db.session.commit()