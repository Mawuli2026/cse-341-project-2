# CSE 341 Project 2 – CRUD API with Google OAuth

This is a RESTful API built with Node.js, Express, and MongoDB, featuring full CRUD functionality for two collections: items and users. The project includes OAuth authentication (Google), Swagger documentation, data validation, error handling, and is deployed live on Render.


# Live Demo
Render API Base URL: https://cse-341-project-2-f2ql.onrender.com

Swagger Documentation: /api-docs

GitHub Repo: https://github.com/Mawuli2026/cse-341-project-2

YouTube Walkthrough: YouTube Video Link


# Features
# Full CRUD for items and users collections

1. Google OAuth login/logout using Passport.js

2. Protected routes (POST, PUT, DELETE) require login

3.  Swagger UI for API documentation and live testing

4.  Manual data validation for POST and PUT requests

5.  Error handling with proper HTTP status codes (400, 401, 404, 500)

6.  Live deployment on Render


# OAuth Authentication
This project uses Google OAuth 2.0 with Passport.js:

GET /auth/google – start login

GET /auth/google/callback – redirect after login

GET /auth/logout – destroy session

After login, you can access protected routes like:

POST /api/items

DELETE /api/users/:id



# API Endpoints
# 🔹 Items Routes: 
GET = /api/items    
POST = /api/items   
PUT = /api/items:id    
DELETE = /api/items:id 


# 🔹 Users Routes
GET = /api/users = Get all users
POST = /api/users = create new user
PUT = /api/users:id = Update user
DELETE = /api/users:id = Delete user


 # Data Validation
# Validation is done manually in middleware:

Item requires:

name (string)

price (number)

User requires:

username (string)

email (valid email format)


# Security
OAuth login is managed through passport-google-oauth20

Sessions are handled with express-session

Protected routes return 401 Unauthorized if user is not authenticated
