# Chatify: Real-Time Chat Application

A full-stack real-time chat application built with the **MERN stack** and **Socket.IO** for instant messaging. Users can create accounts, update their profiles, upload avatars, and chat with other users in real time.

**Tech:** MongoDB · Express.js · React (Vite) · Node.js · Socket.IO · JWT

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Authentication & Security](#authentication--security)
- [Real-Time Features](#real-time-features)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Author](#author)

## Features

- JWT authentication with user signup and login
- Secure cookie-based authentication
- Real-time messaging with Socket.IO
- Online/offline user status
- Profile picture upload using Cloudinary
- Message notifications
- Keyboard typing sound effects
- Responsive UI built with React and Vite
- Arcjet security protection
- Email integration using Resend

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, React Router, Axios, Zustand, React Hot Toast, CSS |
| Backend | Node.js, Express.js, MongoDB, Mongoose, Socket.IO |
| Auth & Security | JWT, Bcrypt, Cookie Parser, Arcjet |
| Services | Cloudinary (image upload), Resend (email) |

## Project Structure

```
chatifyComplete/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Accounts and API keys for [Cloudinary](https://cloudinary.com/), [Resend](https://resend.com/) and [Arcjet](https://arcjet.com/)

### 1. Clone the repository

```bash
git clone https://github.com/atulraghuwanshi84-collab/chatifyComplete.git
cd chatifyComplete
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RESEND_API_KEY=your_resend_api_key
ARCJET_KEY=your_arcjet_key
```

> Never commit your `.env` file. Make sure it is listed in `.gitignore`.

Start the backend server:

```bash
npm run dev
```

### 3. Set up the frontend

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

| Service | URL |
| --- | --- |
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |


## Authentication & Security

- JWT-based authentication
- HTTP-only cookies for secure token storage
- Protected routes
- Password hashing with Bcrypt
- Request protection with Arcjet

## Real-Time Features

- Instant messaging over Socket.IO
- Online users indicator
- Live message delivery

## API Reference

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Log in an existing user |
| POST | `/api/auth/logout` | Log out the current user |
| GET | `/api/auth/me` | Get the authenticated user |

### Messages

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/messages/:id` | Fetch messages with a specific user |
| POST | `/api/messages/send/:id` | Send a message to a specific user |

## Deployment

Suggested setup:

- **Frontend:** Vercel or Netlify
- **Backend:** Render or Railway
- **Database:** MongoDB Atlas

Set all backend environment variables on your hosting platform, and update `CLIENT_URL` to your deployed frontend URL.

## Future Improvements

- Group chats
- Voice messages and video calling
- Read receipts and typing indicator
- Emoji support and message reactions
- File sharing
- Dark mode
- Chat search

## Author

**Atul Raghuwanshi**

- GitHub: [atulraghuwanshi84-collab](https://github.com/atulraghuwanshi84-collab)
- LinkedIn: [atul-raghuwanshi-b-tech](https://www.linkedin.com/in/atul-raghuwanshi-b-tech/)
