# 💬 Chatify - Real-Time Chat Application

A full-stack real-time chat application built using the **MERN Stack** with **Socket.IO** for instant messaging. Users can create accounts, update their profiles, upload avatars, and chat with other users in real time.

---

## 🚀 Features

- 🔐 JWT Authentication
- 👤 User Signup & Login
- 🍪 Secure Cookie-Based Authentication
- 💬 Real-Time Messaging with Socket.IO
- 🟢 Online/Offline User Status
- 🖼️ Profile Picture Upload (Cloudinary)
- 🔔 Message Notifications
- ⌨️ Keyboard Typing Sound Effects
- 📱 Responsive UI
- ⚡ Fast React + Vite Frontend
- 🛡️ Arcjet Security Protection
- 📧 Email Integration using Resend

---







## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Zustand
- React Hot Toast
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- Bcrypt
- Cookie Parser
- Cloudinary
- Resend
- Arcjet

---







## 📂 Project Structure

```
chatify/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---








## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/atulraghuwanshi84-collab/chatify.git

cd chatify
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

Example:

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

Start backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend runs on

```
http://localhost:5173
```

Backend runs on

```
http://localhost:5000
```



---

## 🔒 Authentication

- JWT Authentication
- HTTP-Only Cookies
- Protected Routes
- Password Hashing using Bcrypt

---



## 🌐 Real-Time Features

- Instant Messaging
- Socket.IO Connection
- Online Users Indicator
- Live Message Delivery

---

## 📦 API Overview

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Messages

```
GET  /api/messages/:id
POST /api/messages/send/:id
```

---

## 🚀 Deployment

### Frontend

- Vercel
- Netlify

### Backend

- Render
- Railway

### Database

- MongoDB Atlas

---

## 📈 Future Improvements

- Group Chats
- Voice Messages
- Video Calling
- Read Receipts
- Typing Indicator
- Emoji Support
- Message Reactions
- File Sharing
- Dark Mode
- Chat Search

---

## 👨‍💻 Author

**Atul Raghuwanshi**

GitHub: https://github.com/atulraghuwanshi84-collab

LinkedIn: https://www.linkedin.com/in/atul-raghuwanshi-b-tech/

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
