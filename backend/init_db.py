import pandas as pd
from main.models import Area, Division, Spot, RelatedSpot, SpotDetail, RSpot_Path, Purpose, Genre, RSpotPurpose
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
    'エリア区分ID': int,
    'ジャンルID': int,
    '画像パス': str
}

df = pd.read_csv("./csv/spot.csv", dtype=spot_dtypes)
for index, row in df.iterrows():
    spot_record = Spot(
        spot = row['スポット'],
        division_id = row['エリア区分ID'],
        genre_id = row['ジャンルID'],
        path = row['画像パス']
    )
    db.session.add(spot_record)

# スポット詳細
spot_detail_dtypes = {
    'スポットID': int,
    '緯度': float,
    '経度': float,
    '説明文': str
}

df = pd.read_csv("./csv/spot_detail.csv", dtype=spot_detail_dtypes)
for index, row in df.iterrows():
    spot_detail_record = SpotDetail(
        spot_id = row['スポットID'],
        latitude = row['緯度'],
        longitude = row['経度'],
        description = row['説明文']
    )
    db.session.add(spot_detail_record)


# スポット詳細画像
rspot_path_dtypes = {
    'スポットID': int,
    '画像パス': str
}

df = pd.read_csv("./csv/rspot_path.csv", dtype=rspot_path_dtypes)
for index, row in df.iterrows():
    rspot_path_record = RSpot_Path(
        spot_id = row['スポットID'],
        path = row['画像パス']
    )
    db.session.add(rspot_path_record)



# 関連スポット
related_spot_dtypes = {
    'スポットID': int,
    '関連スポットID': int,
    '関連スポット名称': str,
    '関連スポット画像パス': str
}

df = pd.read_csv("./csv/related_spot.csv", dtype=related_spot_dtypes)
for index, row in df.iterrows():
    related_spot_record = RelatedSpot(
        spot_id = row['スポットID'],
        related_spot_id = row['関連スポットID'],
        related_spot_name = row['関連スポット名称'],
        related_image_path = row['関連スポット画像パス']
    )
    db.session.add(related_spot_record)

# 目的
purpose_dtypes = {
    '目的': str
}

df = pd.read_csv("./csv/purpose.csv", dtype=purpose_dtypes)
for index, row in df.iterrows():
    purpose_record = Purpose(
        purpose = row['目的']
    )
    db.session.add(purpose_record)

# ジャンル
genre_dtypes = {
    'ジャンル': str
}

df = pd.read_csv("./csv/genre.csv", dtype=genre_dtypes)
for index, row in df.iterrows():
    genre_record = Genre(
        genre = row['ジャンル']
    )
    db.session.add(genre_record)

# スポット-目的
spot_purpose_dtypes = {
    'スポットID': int,
    '目的ID': int
}

df = pd.read_csv("./csv/spot_purpose.csv", dtype=spot_purpose_dtypes)
for index, row in df.iterrows():
    spot_purpose_record = RSpotPurpose(
        spot_id = row['スポットID'],
        purpose_id = row['目的ID']
    )
    db.session.add(spot_purpose_record)

db.session.commit()