from flask import request, jsonify, make_response
from main.models import Division, Spot
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
    divisions = Division.query.all()

    res = []
    for division in divisions:
        res.append({"id": division.id, "division": division.division})

    return make_response(jsonify(res))

@app.route('/spot_options', methods=['GET', 'POST'])
def get_spot_options():
    data = request.get_json()
    division_id = data['division_id']

    res = []
    if division_id == -1:
        spots = Spot.query.all()
    else:
        spots = Spot.query.filter(Spot.division_id==division_id).all()


    for spot in spots:
        res.append(
            {
                "id": spot.id,
                "spot": spot.spot,
                "purpose": spot.purpose,
                "genre": spot.genre,
                "path": spot.path
            }
        )

    return make_response(jsonify(res))