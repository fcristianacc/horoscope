from flask import Flask, jsonify
from datetime import datetime
import re

app = Flask(__name__)

def getLists(list_name):

    switcher = {
        'signs': ["Aquário", "Peixes","Carneiro", "Touro", "Gémeos", "Caranguejo", "Leão", "Virgem", "Balança", "Escorpião", "Sagitário", "Capricórnio"],
        'begin_dates': ["20/01", "19/02", "21/03", "21/04", "21/05", "21/06", "23/07", "23/08", "23/09", "23/10", "22/11", "22/12"],
        'end_dates': ["18/02", "20/03", "20/04", "20/05", "20/06", "22/07", "22/08", "22/09", "22/10", "21/11", "21/12", "19/01"],
        }
    return switcher.get(list_name, "Invalid list name")

@app.route("/signs")
def list_signs():

    dic = {}

    for index in range(len(getLists('signs'))):
        dic[index] = {
            "sign": getLists('signs')[index],
            "since": getLists('begin_dates')[index],
            "to": getLists('end_dates')[index]
        }
        
    return dic

@app.route("/date/<day>/<month>/<year>")
def view_sign(day, month, year):

    birthday = day + "/" + month + "/" + year
    birthday_date = datetime.strptime(birthday, '%d/%m/%Y')

    try:
        for index in range(len(getLists('begin_dates'))):
            if (birthday_date >= datetime.strptime(getLists('begin_dates')[index] + "/" + year, '%d/%m/%Y')) and (birthday_date <= datetime.strptime(getLists('end_dates')[index] + "/" + year, '%d/%m/%Y')):
                sign_result = getLists('signs')[index]
                break
        
        result = dict(sign_name="O teu signo é " + sign_result + "!")
    except UnboundLocalError:
        result = dict(sign_name="O teu signo é Capricórnio!")

    return jsonify(result)