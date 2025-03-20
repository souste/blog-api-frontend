Blog App

Live- https://souste-blog-api.netlify.app/

A simple full-stack blog application where users can create, read, comment on, and delete posts. Only the post creator can delete their own posts.

Features

📝 View Posts – Browse all blog posts.

🔍 View Single Post – Click on a post to view its full content and comments.

💬 Comment on Posts – Users can leave comments.

🚀 Authentication – Users must log in to create or delete posts.

❌ Delete Own Posts – Only the post creator can delete their posts.

Tech Stack

Frontend: React, React Router, Context API

Backend: Node.js, Express

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Installation

1. Clone the Repository

2. Install Dependencies

3. Start the Development Server

API Endpoints

Posts

GET /api/v1/posts – Get all posts

GET /api/v1/posts/:id – Get a single post

POST /api/v1/posts – Create a new post (requires authentication)

DELETE /api/v1/posts/:id – Delete a post (only by post creator)

Comments

POST /api/v1/posts/:id/comments – Add a comment

Authentication

POST /api/v1/auth/register – Register a new user

POST /api/v1/auth/login – Log in a user

Environment Variables

Create a .env file in the root directory with the following:

Deployment

To deploy, build the project:

Then, deploy the build/ folder to your preferred hosting service (e.g., Vercel, Netlify).

License

This project is licensed under the MIT License.
