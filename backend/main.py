from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def index():
    # フロントエンドから受信したデータ
    data = request.json.get('name') 
    return {"greeting": "Hello! {}".format(data)}

app.run()