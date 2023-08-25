from flask import request, jsonify, make_response
from flask import Blueprint

views = Blueprint('views', __name__)

@views.route("/", methods=['GET'])
def index():
    return "text parser:)"

@views.route("/doublify", methods=['GET','POST'])
def doublify():
    data = request.get_json()
    text = data['post_text']
    res = text + text

    response = {'result': res}
    return make_response(jsonify(response))

@views.route("/triplify", methods=['GET','POST'])
def triprify():
    data = request.get_json()
    text = data['post_text']
    res = text + text + text

    response = {'result': res}
    return make_response(jsonify(response))