# Node / Create-React-App mashup

Read the instructions thoroughly before starting your project.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

## Available build commands

- `yarn server`: Runs JUST your Express.JS server.

## Welcome to the Sailor Moon Universe

Over the past few days you were introduced to the MERN stack--a stack used to build full-stack applications here at Wyncode.

In your database design homework, we had you design a sailorScoutSchema!

Now we are going to put it to good use, build some routes and make some Sailor Scouts :D

We have set up your server.js and some preliminary code to make a sailor model and create some sailor routes.

We would like you to create 3 different sailor scouts of your choice with their specific properties found here:
https://sailormoon.fandom.com/wiki/Category:Characters_(Crystal)

In your routes/sailors.js file, create two routes--one that will make a post request to your db (add your MONGODB_URL to a .env file). Check in postman to ensure this is working by creating 3 new sailors--each should be different. Once you do that, finish setting up the get route to see all of your sailors!
