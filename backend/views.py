import re
from flask import render_template, url_for, redirect, session, flash, request, abort
from flask_login import login_user, logout_user, login_required, current_user
from flask import Blueprint
from datetime import date
from dateutil.relativedelta import relativedelta
from main.forms import LoginForm, OrientationForm
from main.models import User, Orientation, SpecificCourse, ProfessionalCourse, GeneralCourse, License
from main.apis.api import EmploymentInsurance, EducationTrainingBenefit
from main import db

main = Blueprint('main', __name__)

@app.route("/", methods=['GET'])
def index():
    return "text parser:)"

@app.route("/sample1", methods=['GET','POST'])
def parse():
    data = request.get_json()
    text = data['post_text']
    res = text + text

    response = {'result': res}
    return make_response(jsonify(response))