# Introduction

This app consists of a simple sign up form, which registers a user using the Hasura auth api. User data on sign up is stored on the hasura cluster database and also in a google sheet, if the sign up process fails appropriate message is displayed to the user.

The storage of the user data into google sheets is done using a Zapier-Zap webhook URL. The Zap also sends out a welcome-email to the signed up users.

The UI for the webapp is built using React JS and the backend is done using Python-Flask.
This deployment also comes with a React-Native app which emulates the webapp and sends the requests to the same Flask server.

For the app to function we need a server that will receive the form data sent by the users, process this data and respond back to the user with state of the signup process. 

# Deployment Instructions


* Press the Clone & Deploy button above and follow the instructions.

* The hasura quickstart command clones the project repository to your local system and also creates a free Hasura cluster where the project will be hosted for free.

* A git remote (called hasura) is created and initialized with your project directory.

* `git push hasura master` builds and deploys the project to the created Hasura cluster. But before doing so, make the required changes mentioned in the later sections.

* The python-flask app is deployed as a microservice called app, and the react ui is deployed as a microservice called ui
  
* Run the below command to open your app:

    `$ hasura microservice open app`

* Run the below command to open your app:

    `$ hasura microservice open ui`


## Where to make changes?
* Python Flask

  * To make changes to the project, browse to `/microservices/app/src` and edit the respective files according to your requirements.
  * Commit the changes, and run `git push hasura master` to deploy the changes.


* React

  * To make changes to the project, browse to `/microservices/ui/app/src` and edit the respective files according to your requirements.
  * Commit the changes, and run `git push hasura master` to deploy the changes.


* React-Native

  * Go through [this link](https://hasura.io/hub/project/hasura/hello-react-native) to know how to work with the react-native app inside `/ReactNative`.    


# Tutorial: Python-Flask


* Install python-3 and pip. (for local development)

* Run `$ pip install -r requirements.txt` to install all the dependencies.


### Step 1 - Create Zap-webhook

* Head to [zapier.com](https://zapier.com)

* Sign up.

* Click on `MAKE A ZAP!` to make your own Zap :)


  1. The trigger will be `WebHooks Catch Hook`

  2. Set this payload (replace the values with some inputs):

```sh
    {
        "name" :name,
        "birthdate" :birthdate ,
        "username" :username ,
        "email" :email ,
        "mobile" :mobile ,
        "city" :city
    }
```

  3. The trigger is now complete. A webhook URL will be generated, which will be required in Step 2. Now an action will be triggered whenever a POST/GET request is made at the generated webhook.

  4. Now for the action, choose Google sheets. Since we want to add user details as rows in a Sheet, click on `Create Spreadsheet Row`. Create a Google sheet in your Drive and give its link to the zap. Set up the sheet row by providing which column takes which value, obtained from the step-1 payload.

  5. To send email to signed up users, add another action: Email. Choose `send outbound mail` and choose the email field from step-1 as the `To` field. Write a custom email as a welcome message to the users :)

  6. Turn on the Zap.


### Step 2 - Modify server code
    
The server code is written in `/microservices/app/src/server.py`

Run `hasura ms list` to generate the list of microservices and their URLs for your cluster.

Replace the following URLs used in the server code with your own cluster's URLs and webhook URL.

* AUTH URL


```sh
def signup():
    url = "https://auth.asthmatic70.hasura-app.io/v1/signup"
``` 

* Data URL


```sh
    url = "https://data.asthmatic70.hasura-app.io/v1/query"
```

* Webhook URL-  to be replaced by the webhook url obtained in step-1

```sh
   zapPostURL = 'https://hooks.zapier.com/hooks/catch/2907826/8vw21h/' 
```

### Step 3 - Push and deploy.

Commit the changes and push the commit to deploy your project to your cluster.

`git commit -am "First commit"`


`git push hasura master`


# Tutorial: React

Follow along for a step by step guide on developing this app

## Getting started

### Step 1 - Install create-react-app

```sh
$ npm install -g create-react-app
```

The above command will install create-react-app globaly which is a tool to Create React apps with no build configuration.

### Step 2 - Creating a basic project

```sh


$ create-react-app my-app


$ cd my-app


```

The above command does the following:

1. Creates a new folder in the current working directory called `my-app`


2. Populate the directory with the required files to get started with a react app

### Step 3 - Installing the Ant Design Framework

```sh


$ npm install antd --save


```

This command will install ant design and save it to the `package.json` file.

### Step 4 - Configuring the project

To use some advance features provided by the ant design we need to configure it a bit, follow the official guide https:\u002F\u002Fant.design\u002Fdocs\u002Freact\u002Fuse-with-create-react-app

### Step 5 - Folder structure

```


my-app


├── README.md


├── node_modules


├── package.json


├── .gitignore


├── public


│   └── favicon.ico


│   └── index.html


│   └── manifest.json


└── src


    └── App.css


    └── App.js


    └── App.test.js


    └── index.css


    └── index.js


    └── logo.svg


    └── registerServiceWorker.js


    └── assets


    │   └── css


    │   │   └── normalize.css


    │   └── img


    │       └── logo.svg


    │       └── bg.png


    └── components


        └── Layout.js


        └── Layout.css


        └── section


            └── Article.js


            └── Article.css


            └── form


            │   └── Signup.js


            │   └── Signup.css


            └── home


                └── Home.js


                └── Hoem.css


```

* assets contains the required files like css reset, images used in the project etc.


* component directory contains the layout and other components of the app


* `Layout.js` define the structure of the web page


* `Article.js` is serving as a container for the other components


* `Signup.js` is the signup form 

  ![Signup view](https://raw.githubusercontent.com/aditya-kumbhar/HPDF-T81-PF/master/ReactJS%20%2B%20Python%20Flask/second.png "Signup view")


# Tutorial: React-Native


## Dependencies
  * [React Native](https://facebook.github.io/react-native/)
  * [NativeBase for UI Elements](https://github.com/GeekyAnts/NativeBase)
  * [React Native Datepicker](https://github.com/xgfe/react-native-datepicker)
 
 ## Pre-Requisites
  * [Node](https://nodejs.org/) 4.x or better  
  * [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development 
  * [Android SDK](http://facebook.github.io/react-native/docs/getting-started.html) for Android development (optional) 
  * [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional) 
  * [Hasura cli](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)
  
 ## Getting Started 
  #### 1. Open Command Prompt or gitbash and install these commands   
      >> npm install -g npm@4.6.1

      >> npm install -g yarn@1.3.2
      
      >> npm install -g react-native-cli@2.0.1
      
  #### 2. Project Installation Procedure
       >> git clone https://github.com/hrishiakhade/Zap_app.git
      
       >> cd Zap_app
      
       >> cd Zapier
      
       >> npm install  
      
       >> npm install native-base --save
      
       >> npm install react-native-datepicker --save
      
       >> react-native link
       
  ## Running
   ####  Run app in Android device(enable USB Debugging First) or emulator   
         'react-native run-android'
  

 


# In Action!

### React Front-end

* Navigate to `https:\\ui.<your-cluster-name>.hasura-app.io\#login` in your browser


![app screen](https://github.com/aditya-kumbhar/HPDF-T81-PF/blob/master/ReactJS%20+%20Python%20Flask/first.png?raw=true "app screen")


### React-Native Front-end

![Alt Text](https://i.imgflip.com/23tmt4.gif)
![Alt Text](https://i.imgflip.com/23tn9u.gif) 
