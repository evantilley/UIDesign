from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__, static_url_path='/static')

@app.route('/')
def hello_world():
   return render_template("index.html")

@app.route('/map')
def map():
    return render_template("map.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route('/tunnel')
def tunnel():
    return render_template("tunnel.html")

@app.route('/tuns1')
def tuns1():
    return render_template("/tunnels/tuns1.html")



if __name__ == '__main__':
    app.run(debug = True)