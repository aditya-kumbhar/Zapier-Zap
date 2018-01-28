from src import app
from flask import Flask, render_template, request
import requests
import json


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/signup", methods = ['GET','POST'])
def signup():
    url = "https://auth.asthmatic70.hasura-app.io/v1/signup"
    name = request.form['name']
    username = request.form['username']
    password = request.form['pass']
    email = request.form['email']
    mobile = request.form['mobile']
    city = request.form['city']
    birthdate = request.form['birthdate']
    
    # This is the json payload for the query
    requestPayload = {
        "provider": "username",
        "data": {
            "username": username,
            "password": password
        }
    }

    # Setting headers
    headers = {
        "Content-Type": "application/json"
    }

    # Make the query and store response in resp
    resp = requests.request("POST", url, data=json.dumps(requestPayload), headers=headers)
    resp = json.loads(resp.content)     # resp.content contains the json response.
    if 'hasura_id' in resp.keys():
        #signup success. insert data in users table
        # This is the url to which the query is made
        url = "https://data.asthmatic70.hasura-app.io/v1/query"
        
        hasura_id = resp['hasura_id']
        # This is the json payload for the query
        requestPayload = {
            "type": "insert",
            "args": {
                "table": "users",
                "objects": [
                    {
                        "name"  :name,
                        "birthdate" :birthdate ,
                        "hasura_id" :hasura_id ,
                        "username" :username ,
                        "password" :password ,
                        "email" :email ,
                        "mobile" :mobile ,
                        "city" :city
                        }
                ]
            }
        }

        # Setting headers
        headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 8fed092aefc106fb907c6061de133b15a1e95c6310ec79c2"
        }

        # Make the query and store response in resp
        queryResp = requests.request("POST", url, data=json.dumps(requestPayload), headers=headers)

        # resp.content contains the json response.
        print(queryResp.content)
        zapPostURL = 'https://hooks.zapier.com/hooks/catch/2907826/8vw21h/'
        zapPayLoad =  {
                        "name" :name,
                        "birthdate" :birthdate ,
                        "username" :username ,
                        "email" :email ,
                        "mobile" :mobile ,
                        "city" :city
                        }
        zapResp = requests.request("POST",zapPostURL, data = json.dumps(zapPayLoad))
        return 'OK'
    else:
        ans = resp['code']+" "+resp['message']  
        return ans
    
    print(resp)