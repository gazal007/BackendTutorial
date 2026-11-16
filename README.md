# Intro to Backend

Node + Express + MongoDB tutorial project.

## Setup

1. `cd backend && npm install`
2. Copy `.env.example` to `.env` and fill in `MONGODB_URI` (MongoDB Atlas) and `PORT`.
3. `npm run dev`

## APIs (base: http://localhost:4000/api/v1)

- POST /users/register, /users/login, /users/logout
- POST /posts/create
- GET /posts/get-posts
- PATCH /posts/update/:id
- DELETE /posts/delete/:id
