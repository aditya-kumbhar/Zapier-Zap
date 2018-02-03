# Getting started (ReactJS + Python Flask)

### ReactJs :
In the project directory, you need to run this command to install the node modules:
### `npm install`

After that, in the project directory, you need to run this command to start the app:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Screenshots 

Home Page - ![Home Page](/home_page.png "Home Page")

Search Page - ![Search Page](/search_page.png "Search Page")


### Python Flask :

- [Hasura CLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)
- [Git](https://git-scm.com)
- [Python 3](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) (required only for local development)

### Quickstart

```bash
# Quickstart from this boilerplate 
$ hasura quickstart hello-python-flask
```

The `quickstart` command does the following:

1. Creates a new directory `hello-python-flask` in the current working directory
2. Creates a free Hasura cluster and sets it as the default for this project
3. Sets up `hello-python-flask` as a git repository and adds `hasura` remote to push code
4. Adds your SSH public key to the cluster so that you can push to it

### Deploy

```bash
# Navigate to the project directory
$ cd hello-python-flask

# git add, commit and push to deploy
$ git add . && git commit -m "First commit"
$ git push hasura master
```

Once the git push goes through, Flask microservice (called `app`) will be available at a URL.

```bash
# Open the flask app url in browser
$ hasura microservice open app
```

If the browser shows a "Hasura Hello World" page, everything is working as expected.
If it doesn't, go through the previous steps and see if you missed anything.


### Directory structure

The flask microservice is located in `microservices/app` directory in your Hasura project with the following structure:

```bash
.
├── Dockerfile                   # instructions to build the image
├── k8s.yaml                     # defines how the app is deployed
├── conf
│   └── gunicorn_config.py       # configuration for the web server
└── src
    ├── config.py                # some utilities to configure URLs etc
    ├── hasura.py                # hasura API examples
    ├── __init__.py              # main Flask app is defined here
    ├── requirements.txt         # python dependency requirements
    └── server.py                # main Flask server code
```
