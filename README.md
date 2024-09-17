# Tech Blog Coding Challenge

## Overview

This project is a simple **Tech Blog** application where users can publish, edit, and delete blog posts. The app is built using modern web development technologies and follows the MVC (Model-View-Controller) design pattern.

## Features

- Users can sign up and log in.
- Users can create, edit, and delete their own blog posts.
- Blog posts are displayed with the most recent posts first.
- Secure authentication and password management using bcrypt.

## Technologies Used

- **Node.js**: Back-end server runtime
- **Express.js**: Web framework for routing and handling requests
- **MySQL**: Database to store user and post information
- **Sequelize**: ORM for interacting with the MySQL database
- **Handlebars.js**: Templating engine for rendering HTML views
- **bcrypt**: For hashing user passwords
- **dotenv**: For environment variables management

## Setup Instructions

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up the `.env` file with your MySQL credentials.
4. Run the database migrations and seed data using Sequelize.
5. Start the application with `npm start` and navigate to `http://localhost:3001`.
