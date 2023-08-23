import pandas as pd
from main.models import Area, RelatedSpot, SpotDetail
from main import db

db.drop_all()
db.create_all()


# エリア区分テーブルを初期化
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





# スポット詳細テーブルを初期化
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






# 関連スポットテーブルを初期化
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



db.session.commit()