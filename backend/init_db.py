import pandas as pd
from main.models import Area, Division, Spot
from main import db

db.drop_all()
db.create_all()

# エリア
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

# エリア区分
division_dtypes = {
    'エリア区分': str
}

df = pd.read_csv("./csv/division.csv", dtype=division_dtypes)
for index, row in df.iterrows():
    division_record = Division(
        division = row['エリア区分'],
    )
    db.session.add(division_record)

# スポット
spot_dtypes = {
    'スポット': str,
    'エリア区分id': int,
    '目的': str,
    'ジャンル': str,
    '画像パス': str
}

df = pd.read_csv("./csv/spot.csv", dtype=spot_dtypes)
for index, row in df.iterrows():
    spot_record = Spot(
        spot = row['スポット'],
        division_id = row['エリア区分id'],
        purpose = row['目的'],
        genre = row['ジャンル'],
        path = row['画像パス']
    )
    db.session.add(spot_record)

db.session.commit()