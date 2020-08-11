# Friend-URL
URL-Shortener using NodeJS, ExpressJS, EJS, ShortID, Valid-URL, MongoDB, Axios HTTP Client.

## Requirements
For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

 You can install nodejs and npm easily with apt install, just run the following commands.
 
 $ sudo apt-get install nodejs
 $ sudo apt-get install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
---

## Install

    $ git clone https://github.com/Avirup-301294/Friend-URL
    $ cd URL-Shortener
    $ npm install

## Configure app

Create a folder 'config' inside that folder make two files 'default.json' and 'db.js'.
Inside default.json you have to mention your,
- MongoURI;
- baseURL;
Inside the db.js you have to configure the connect with the mongo db

## Running the project
$ npm start

## Running the project locally by 
 $ nodemon or node index.js 
 Note that these two above operation will run only after you have connected to mongodb
 $ mongod
