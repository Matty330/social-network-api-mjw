Social Network API

Description
This is a NoSQL-based social network API built using MongoDB, Express.js, and Mongoose. The API allows users to:
- Create an account
- Share their thoughts
- React to friends’ thoughts
- Add and remove friends from their friend list

This API is tested using Insomnia, and all CRUD operations for users, thoughts, reactions, and friends have been implemented.

Walkthrough Video
Watch the full demo here: [Watch Video](https://drive.google.com/file/d/1oxVBzcga2X5EIg7VbZR2ekN_25sabUpi/view?usp=sharing)

Table of Contents
- Installation
- Usage
- API Endpoints
- Technologies Used
- License
- Questions

Installation
To run this project locally, follow these steps:

Clone the repository  
git clone git@github.com:Matty330/social-network-api-mjw.git

Navigate to the project directory  
cd social-network-api-mjw

Install dependencies  
npm install

Start the server  
node server.js

The API will be running at:  
http://localhost:3001

Usage
Use Insomnia to test the following API endpoints.

Users API (/api/users)
Method | Endpoint | Description
--------|---------|-------------
GET | /api/users | Get all users
GET | /api/users/:userId | Get a single user by ID
POST | /api/users | Create a new user
PUT | /api/users/:userId | Update a user by ID
DELETE | /api/users/:userId | Delete a user by ID

Friends API (/api/users/:userId/friends/:friendId)
Method | Endpoint | Description
--------|---------|-------------
POST | /api/users/:userId/friends/:friendId | Add a friend
DELETE | /api/users/:userId/friends/:friendId | Remove a friend

Thoughts API (/api/thoughts)
Method | Endpoint | Description
--------|---------|-------------
GET | /api/thoughts | Get all thoughts
GET | /api/thoughts/:thoughtId | Get a single thought by ID
POST | /api/thoughts | Create a new thought
PUT | /api/thoughts/:thoughtId | Update a thought by ID
DELETE | /api/thoughts/:thoughtId | Delete a thought by ID

Reactions API (/api/thoughts/:thoughtId/reactions)
Method | Endpoint | Description
--------|---------|-------------
POST | /api/thoughts/:thoughtId/reactions | Add a reaction
DELETE | /api/thoughts/:thoughtId/reactions/:reactionId | Remove a reaction

Technologies Used
- Node.js - JavaScript runtime environment
- Express.js - Web framework for Node.js
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB
- Insomnia - API testing tool

License
This project is licensed under the MIT License.

Questions?
Contact:  
GitHub: [Matty330](https://github.com/Matty330)  
Email: msimmw331@outlook.com
