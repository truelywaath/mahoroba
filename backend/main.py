from flask import Flask, request

@app.route('/', methods=['POST'])
def index():
    # フロントエンドから受信したデータ
    data = request.json.get('name') 
    return {"greeting": "Hello! {}".format(name)}
