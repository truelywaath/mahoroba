from flask import Flask
from flask_cors import CORS
from views import views

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
app.register_blueprint(views)
CORS(app) #Cross Origin Resource Sharing

if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)