from flask import request, jsonify, make_response
from main.models import Area
from main import app, db 

@app.route("/", methods=['GET'])
def index():
    return "text parser:)"

@app.route("/doublify", methods=['GET','POST'])
def doublify():
    data = request.get_json()
    text = data['post_text']
    res = text + text

    response = {'result': res}
    return make_response(jsonify(response))


@app.route("/area_options", methods=['GET', 'POST'])
def get_area_options():
    areas = Area.query.all()
    division_set = set()

    for area in areas:
        division_set.add(area.division)

    res = {}
    for id, division in enumerate(division_set):
        res[id] = division

    return make_response(jsonify(res))