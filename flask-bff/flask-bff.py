from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def home():
    return "Try: /your-name"

@app.route("/<name>")
def hello(name):
    return render_template('hello.html', name=name)
