from flask import request, jsonify, make_response
from main.models import Division, Spot, Purpose, Genre, RSpotPurpose, RSpot_Path, SpotDetail, RelatedSpot, Timezone, RSpotTimezone
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
    print("OK!")

    return make_response(jsonify(res))

@app.route('/spot_options', methods=['GET', 'POST'])
def get_spot_options():
    data = request.get_json()
    division_id = data['division_id']
    timezone_id = data['timezone_id']

    res = []
    if division_id == -1:
        spots = Spot.query.all()
    else:
        spots = Spot.query.filter(Spot.division_id==division_id).all()

    r_spot_purposes = RSpotPurpose.query.all()

    purposes_mp = {}
    for r_spot_purpose in r_spot_purposes:
        if r_spot_purpose.spot_id not in purposes_mp:
            purposes_mp[r_spot_purpose.spot_id] = []
        purposes_mp[r_spot_purpose.spot_id].append(r_spot_purpose.purpose_id)

    r_spot_timezones = RSpotTimezone.query.all()
    timezones_mp = {}
    for r_spot_timezone in r_spot_timezones:
        if r_spot_timezone.timezone_id not in timezones_mp:
            timezones_mp[r_spot_timezone.timezone_id] = []

        timezones_mp[r_spot_timezone.timezone_id].append(r_spot_timezone.spot_id)

    for spot in spots:
        if timezone_id != -1:
            if spot.id not in timezones_mp[timezone_id]:
                continue

        if spot.id not in purposes_mp:
            purposes_mp[spot.id] = []

        res.append(
            {
                "id": spot.id,
                "spot": spot.spot,
                "purpose_ids": purposes_mp[spot.id],
                "genre_id": spot.genre_id,
                "path": spot.path
            }
        )

    return make_response(jsonify(res))

@app.route('/purpose_options', methods=['GET', 'POST'])
def get_purpose_options():
    purposes = Purpose.query.all()

    res = []
    for purpose in purposes:
        res.append({"value": purpose.id, "label": purpose.purpose})

    return make_response(jsonify(res))


@app.route('/genre_options', methods=['GET', 'POST'])
def get_genre_options():
    genres= Genre.query.all()

    res = []
    for genre in genres:
        res.append({"value": genre.id, "label": genre.genre})

    return make_response(jsonify(res))


@app.route('/spot_images', methods=['GET', 'POST'])
def get_spot_images():
    data = request.get_json()
    spot_id = data['spot_id']
    rspot_paths = RSpot_Path.query.filter(RSpot_Path.spot_id==spot_id).all()

    res = []
    for rspot_path in rspot_paths:
        res.append({"path": rspot_path.path})

    return make_response(jsonify(res))


@app.route('/spot_info', methods=['GET', 'POST'])
def get_spot_info():
    data = request.get_json()
    spot_id = data['spot_id']
    spot_detail = SpotDetail.query.filter(SpotDetail.spot_id==spot_id).first()

    res = [{"latitude":spot_detail.latitude, "longitude":spot_detail.longitude, "description":spot_detail.description}]

    return make_response(jsonify(res))



@app.route('/related_spots', methods=['GET', 'POST'])
def get_related_spots():
    data = request.get_json()
    spot_id = data['spot_id']
    related_spots = RelatedSpot.query.filter(RelatedSpot.spot_id==spot_id).all()

    res = []
    for related_spot in related_spots:
        res.append({
            "related_spot_id": related_spot.related_spot_id,
            "related_spot_name":related_spot.related_spot_name,
            "related_image_path":related_spot.related_image_path
        })

    return make_response(jsonify(res))

@app.route('/timezone_options', methods=['GET', 'POST'])
def get_timezone_options():
    timezones = Timezone.query.all()

    res = []
    for timezone in timezones:
        res.append({ "id": timezone.id, "timezone": timezone.timezone })

    return make_response(jsonify(res))