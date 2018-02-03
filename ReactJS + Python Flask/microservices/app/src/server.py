from src import app
from flask import Flask, render_template, request, jsonify
import requests
import json


@app.route("/")
def index():
    return 'The endpoint is at /signup'

@app.route("/signup", methods = ['GET','POST'])
def signup():
    url = "https://auth.asthmatic70.hasura-app.io/v1/signup"
    
    user_info = request.get_json(force=True)
    name = user_info['name']
    username = user_info['username']
    password = user_info['password']
    email = user_info['email']
    mobile = user_info['phone']
    city = user_info['city']
    birthdate = user_info['dob']
    
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
        return jsonify(result= 'Signup Successful.', code='true')
    else:
        ans = resp['message']  
        return jsonify(result = ans, code='false')
    