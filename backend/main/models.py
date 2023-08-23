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
    purpose = db.Column(db.String(64))
    genre = db.Column(db.String(64))
    path = db.Column(db.String(64))

    def __init__(self, spot, division_id, purpose, genre, path):
        self.spot = spot
        self.division_id = division_id
        self.purpose = purpose
        self.genre = genre
        self.path = path
