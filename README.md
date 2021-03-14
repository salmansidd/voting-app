# Getting Started with the Voting Application

This is a Single Page Application that lets users to vote through the Polls API.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Documentation for the Polls API is available [here](https://pollsapi.docs.apiary.io/).
The application is tested End-2-End using [Cypress Framework](https://www.cypress.io/)

## Technology Stack

JavaScript, React, Redux, Axios, Material UI, Styled Components and Cypress JS

## Main Features

1. Provides a list of all the available questions on the Home Page
2. Provides details about a selected question on a new page
3. Allows users to choose an option and vote for the avaiable questions
4. Allows users to create a new poll by providing a question and multiple choices

## Online Deployed Demo

The Online Demo for the Voting App with complete functionality can be accessed at https://salmansidd.github.io/voting-app.

## Local Installation Guide

In order to setup the project locally please follow the instructions below. In the root directory, you can run the following commands using a terminal:

### `npm install`

Installs the required dependencies in the local node_modules folder that are defined in package.json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/voting-app](http://localhost:3000/voting-app) to view it in the browser.

The page will reload automatically if you make edits.\
You may also see any linting errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## End-2-End Testing Guide

In the './cypress' directory, you can run the following commands using a terminal:

### `npm run cy:run`

Runs all the integration tests in the terminal.

### `npm run cy:open`

Runs all the integration tests in a separate browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
