# Zapier-Zap-Team-Task

This app consists of a simple sign up form, which registers a user using the Hasura auth api. User data on sign up is stored on the hasura cluster database and also in a google sheet, if the sign up process fails appropriate message is displayed to the user.

The UI is build using React JS and the backend is done using NodeJs-express.
For the app to function need a server that will receive the form data sent by the users, process this data and respond back to the user with state of the signup process. 
To store the user data in the google sheet we will use the Zapier webhook API provided. For the React app to talk to our NodeJs-express server, the endpoint URL of our server should be accessible to the React app and should use a secure HTTPS URL. For this reason, running our server locally will not work and instead we need to host our server online. In this tutorial, we are going to deploy our server on Hasura which automatically provides SSL-enabled domains.
## Pre-requisites

### Back-end

** Before you begin, ensure that you have the latest version of the `hasura cli` installed. You can find instructions to download the `hasura cli` from [here](https:\u002F\u002Fdocs.hasura.io\u002F0.15\u002Fmanual\u002Finstall-hasura-cli.html)

### Front-end

* We will use Create-react-app along with the Ant Design framework to build our app. Ensure that you have Node installed on your computer, do this by running `node-v` in the terminal. If you do not have Node installed you can get it from https:\u002F\u002Fnodejs.org

## Quickstart 

To see the app in action you can follow the instructions below:

* Navigate to `https:\u002F\u002Fui.asthmatic70.hasura-app.io\u002F#login` in your browser

![app screen](https://github.com/aditya-kumbhar/HPDF-T81-PF/blob/master/ReactJS%20+%20Python%20Flask/first.png?raw=true \"app screen\")

## Tutorial\n \nFollow along for a step by step guide on developing this app

## Getting started

### Step 1 - Install create-react-app

```sh\n$ npm install -g create-react-app\n```

The above command will install create-react-app globaly which is a tool to Create React apps with no build configuration.

### Step 2 - Creating a basic project

```sh\n$ create-react-app my-app\n$ cd my-app\n```

The above command does the following:

1. Creates a new folder in the current working directory called `my-app`\n2. Populate the directory with the required files to get started with a react app

### Step 3 - Installing the Ant Design Framework

```sh\n$ npm install antd --save\n```

This command will install ant design and save it to the `package.json` file.

### Step 4 - Configuring the project

To use some advance features provided by the ant design we need to configure it a bit, follow the official guid https:\u002F\u002Fant.design\u002Fdocs\u002Freact\u002Fuse-with-create-react-app

### Step 5 - Folder structure

```\nmy-app\n├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   └── favicon.ico\n│   └── index.html\n│   └── manifest.json\n└── src\n    └── App.css\n    └── App.js\n    └── App.test.js\n    └── index.css\n    └── index.js\n    └── logo.svg\n    └── registerServiceWorker.js\n    └── assets\n    │   └── css\n    │   │   └── normalize.css\n    │   └── img\n    │       └── logo.svg\n    │       └── bg.png\n    └── components\n        └── Layout.js\n        └── Layout.css\n        └── section\n            └── Article.js\n            └── Article.css\n            └── form\n            │   └── Signup.js\n            │   └── Signup.css\n            └── home\n                └── Home.js\n                └── Hoem.css\n```

* assets contains the required files like css reset, images used in the project etc.\n* component directory contains the layout and other components of the app\n* `Layout.js` define the structure of the web page\n* `Article.js` is serving as a container for the other components\n* `Signup.js` is the signup form 

  ![Signup view](https://raw.githubusercontent.com/aditya-kumbhar/HPDF-T81-PF/master/ReactJS%20%2B%20Python%20Flask/second.png \"Signup view\")\n