[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# E-commerce Back End

## Description
This project uses inquirer and mysql2 to save to a databse of employees. The app uses inquirer to promp the user with questions about employees and uses mysql2 to populate a dbeaver database with the employees, roles, and departments.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Links](#links)
4. [Screenshots](#screenshots)
5. [License](#license)
6. [Questions](#questions)

## Installation
- Clone the repo down to your local machine
- copy the database schema into your Dbeaver to create the database
- Install modules by using `npm i` in your terminal
- Type `npm run seed` in the terminal to seed the database
- Then youre good to move on to the usage

## Usage
- When installed, type `npm start` in the terminal
- Navigate to http://localhost:3001/ in a browser or with a program like insomnia
- Use the routes provided in the code to view/change/delete from the local database
- This is only back end so the changes will be in the database

### User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Links

[Dashboard Link](https://github.com/ThatBallinGuy/E-commerce-Back-End)

[Demo Link]()

## License
Licensed under [MIT License](https://opensource.org/licenses/MIT)

## Questions
For any questions, contact me at:
- Github: [ThatBallinGuy](https://github.com/ThatBallinGuy)
- Email: Tballin2000@hotmail.com
  