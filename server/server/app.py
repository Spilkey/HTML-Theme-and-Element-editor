# my-app/server/server/app.py
from flask import Flask
from flask_cors import CORS, cross_origin

import seaborn as sns
import math
import numpy as np
import random
import requests


app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def getRoot():
    return "Welcome!"

@app.route("/app/", defaults={"path": "index.html"})
@app.route("/app/<path:path>")
def getApp(path):
    return app.send_static_file(path)

@app.route("/random-palette")
def getRandomPalette():

    url = "http://colormind.io/api/";
    data = {
	    'model' : "default",
    }
    response = requests.get(url, json=data)
    results = {"colors": response.json()["result"]}
    return results