from main import db

# エリア区分テーブル
class Area(db.Model):
    __tablename__ = 'area'

    id = db.Column(db.Integer, primary_key=True)
    division = db.Column(db.String(64))
    area = db.Column(db.String(64))

    def __init__(self, division, area):
        self.division = division
        self.area = area