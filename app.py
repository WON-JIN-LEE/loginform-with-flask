from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbtest

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/join',  methods=['get'])
def joinpage():
    return render_template('join.html')


@app.route('/join',  methods=['post'])
def join_data_insert():
    id_receive = request.form["id_give"]
    pw_receive = request.form["pw_give"]

    print(id_receive)
    print(pw_receive)
    doc = {'id': id_receive,
           'pw': pw_receive}
    db.logindata.insert_one(doc)

    return jsonify({'msg': "회원가입이 완료되었습니다."})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)