from main import db

# エリアテーブル
class Area(db.Model):
    __tablename__ = 'area'

    id = db.Column(db.Integer, primary_key=True)
    division = db.Column(db.String(64))
    area = db.Column(db.String(64))

    def __init__(self, division, area):
        self.division = division
        self.area = area

# エリア区分テーブル
class Division(db.Model):
    __tablename__ = 'division'

    id = db.Column(db.Integer, primary_key=True)
    division = db.Column(db.String(64))

    def __init__(self, division):
        self.division = division

# スポットテーブル
class Spot(db.Model):
    __tablename__ = 'spot'
    
    id = db.Column(db.Integer, primary_key=True)
    spot = db.Column(db.String(64))
    division_id = db.Column(db.Integer)
    genre_id = db.Column(db.Integer)
    path = db.Column(db.String(64))

    def __init__(self, spot, division_id, genre_id, path):
        self.spot = spot
        self.division_id = division_id
        self.genre_id = genre_id
        self.path = path

# スポット詳細テーブル
class SpotDetail(db.Model):
    __tablename__ = 'spot_detail'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    spot_id = db.Column(db.Integer)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    description = db.Column(db.String(256))


    def __init__(self, spot_id, latitude, longitude, description):
        self.spot_id = spot_id
        self.latitude = latitude
        self.longitude = longitude
        self.description = description

# スポット詳細画像テーブル
class RSpot_Path(db.Model):
    __tablename__ = 'rspot_path'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    spot_id = db.Column(db.Integer)
    path = db.Column(db.String(64))

    def __init__(self, spot_id, path):
        self.spot_id = spot_id
        self.path = path

# 関連スポットテーブル
class RelatedSpot(db.Model):
    __tablename__ = 'related_spot'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    spot_id = db.Column(db.Integer)
    related_spot_id = db.Column(db.Integer)
    related_spot_name = db.Column(db.String(128))
    related_image_path = db.Column(db.String(128))


    def __init__(self, spot_id, related_spot_id, related_spot_name, related_image_path):
        self.spot_id = spot_id
        self.related_spot_id = related_spot_id
        self.related_spot_name = related_spot_name
        self.related_image_path = related_image_path

# 目的テーブル
class Purpose(db.Model):
    __tablename__ = 'purpose'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    purpose = db.Column(db.String(64))

    def __init__(self, purpose):
        self.purpose = purpose

# スポット-目的テーブル
class RSpotPurpose(db.Model):
    __tablename__ = 'spot_purpose'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    spot_id = db.Column(db.Integer)
    purpose_id = db.Column(db.Integer)

    def __init__(self, spot_id, purpose_id):
        self.spot_id = spot_id
        self.purpose_id = purpose_id

# ジャンル
class Genre(db.Model):
    __tablename__ = 'genre'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    genre = db.Column(db.String(64))

    def __init__(self, genre):
        self.genre = genre

