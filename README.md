# Consumer Client

This project is a client built using Vue3 that allows a user to send a payload to a NodeJS API. The payload is then recorded as report data and can be visualized using the Admin client built in React.

## Functionality

The client has the following functionality:

* A user can log in using a username and password
* A user can select products to consume
* A user can submit their selection to the API
* A user can view the reports of all users on another client, called Admin client built in React.

## How it works

The client makes API calls to the NodeJS API to log in, select products, and submit the selection. The API then records the selection as report data and stores it in a MongoDB database. The Admin client can then access this data and display it in a report.

## Technologies Used

The client was built using the following technologies:

* Vue3
* Vue Router
* Vue i18n
* Vite
* SASS
* Playwright
* ESLint
* Prettier
* TypeScript

## Running the Project

To run the project, you need to have NodeJS installed. You can then run the following commands:

* `npm install` to install the dependencies
* `npm run build` to build the project
* `npm run preview` to start a development server
* `npm run test` to run the tests


