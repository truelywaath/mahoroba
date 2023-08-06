from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORSを設定

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello, from Flask!'}), 200


if __name__=="__main__":
    app.run()
