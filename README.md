# person-handling
Small amount of code to access, store, and update data in a contact crm platform

[![Build Status](https://travis-ci.com/DaemonWill/person-handling.svg?branch=master)](https://travis-ci.com/DaemonWill/person-handling)

## Requirements

* Any stable release of NodeJS

## Setup

Simply run an `npm install` in the root folder and you should be good

## Using the app/service

This small app requires and api_token and company domain from https://www.pipedrive.com/ . After starting a free trial or obtaining an account, head over to the `pipedrive-service.js` file and enter your information. You can find your token at : "https://<COMPANY NAME>.pipedrive.com/settings/api"

In order to run the scripts in index.js, you can run `npm start` or `node index.js`. Make sure that the parameters passed on lines 36 - 44 suit your specific needs.

## Running tests
TODO
