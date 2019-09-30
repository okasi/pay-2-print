[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) ![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

# pay-2-print
*A pay-to-print platform that is meant to be used with a raspberry pi.*

## Table of Contents

* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation) 
* [About project](#about-project)
  * [Problem](#problem)
  * [Solution](#solution)
* [Planning](#planning)
  * [Personas](#personas)
  * [User stories](#user-stories)
  * [Kanban](#kanban)
  * [User Survey](#user-survey)
* [Visual design](#visual-design)
  * [Wireframes](#wireframes)
  * [Logo](#logo)

# Getting started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

Install on the raspberry pi:<br/>
sudo apt-get install cups printer-driver-gutenprint

<br/>

Setup cups on the raspberry pi:<br/>
https://www.howtogeek.com/169679/how-to-add-a-printer-to-your-raspberry-pi-or-other-linux-computer/

Set default printer:<br/>
lpadmin -d printerName

Check printer config status:<br/>
lpstat -s

#### Back-end:
- MongoDB
- Express
- graphql-yoga

```json
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "dotenv": "^8.1.0",
    "express": "~4.17.1",
    "graphql-yoga": "^1.18.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.7.1",
    "morgan": "~1.9.1",
    "multer": "^1.4.2"
  },
```

#### Front-end:
- React

```json
  "dependencies": {
    "@apollo/react-hooks": "^3.1.1",
    "@apollo/react-ssr": "^3.1.1",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "apollo-boost": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.3",
    "apollo-client": "^2.6.4",
    "apollo-link-context": "^1.0.19",
    "apollo-link-http": "^1.5.16",
    "axios": "^0.19.0",
    "dotenv": "^8.1.0",
    "graphql": "^14.5.8",
    "graphql-tag": "^2.10.1",
    "https-proxy-agent": "^2.2.2",
    "isomorphic-unfetch": "^3.0.0",
    "next": "9.0.6",
    "next-offline": "^4.0.5",
    "node-sass": "^4.12.0",
    "react": "16.9.0",
    "react-dom": "16.9.0",
    "reblocks": "^0.7.0"
  },
```

### Installation
Clone the repo
```
git clone https://github.com/okasi/pay-2-print.git
```

Change to the `api` folder and install development and production dependencies.

```
cd api
npm install
```

You will need to set up MongoDB.<br /> 
Probably would be easiest to use MongoDB Atlas.<br /> 
Enter the url in .env file located inside api folder.<br /> 

<br /> 

Change to the `view` folder and install development and production dependencies.
```
cd view
npm install
```

<br /> 

Go to the `api` folder and start the server.
```
cd api
npm run server
```

Go to the `view` folder and run the start script.
```
cd view
npm run start
```


# About project

### Problem
Excessive printing is a waste of resources.<br /> 


### Solution
Require payment to print.<br /> 


# Planning

## Personas
- User
- Admin


## User stories

As a User, I want to be able to upload a picture I want to print <br /> 
*Acceptance criteria:*<br /> 
Be able to upload picture file.<br /> 

As a Admin, I want to be able to get paid for each print.<br /> 
*Acceptance criteria:*<br /> 
Be able to get paid.<br /> 

As a User, I want to be able to get my uploaded picture to print.<br /> 
*Acceptance criteria:*<br /> 
Print the picture.<br /> 

As a User, I want to be able to register as a user on the platform, <br /> 
so that everything I print gets logged.<br /> 
*Acceptance criteria:*<br /> 
Be able to register as a user with name, email, password.<br /> 

As a User, I want to be see my profile name.<br /> 
*Acceptance criteria:*<br /> 
Be able to see user name.<br /> 

As a Admin, I want to see logs of users' prints.<br /> 
*Acceptance criteria:*<br /> 
Be able to see logs.<br /> 


## Kanban
- [Link to Github Projects](https://github.com/okasi/pay-2-print/projects/1)

## User survey

Do you believe that you would print less if you paid for each print?<br /> 
Total:<br /> 
Yes:<br /> 
No:<br /> 

Would you be open to try out paying with cryptocurrencies if it's more seamless than traditional payment methods?<br /> 
Total:<br /> 
Yes:<br /> 
No:<br /> 


# Visual design 

## Wireframes
[Link to Figma file](https://www.figma.com/file/1ryXyOtWcbherMljkYSlfX/pay2print)

## Logo
![Logo](docs/p2p-square-logo.png) 

<br />
