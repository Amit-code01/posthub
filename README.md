# 🚀 PostHub – Real-Time Posts Explorer

PostHub is a full-stack web application that allows users to explore and search posts in real time using WebSockets. It demonstrates scalable architecture, efficient data fetching, and modern UI design.

---

## 🔗 Live Demo

* 🌐 Frontend: https://posthub-5g2y07d87-amit-code01s-projects.vercel.app
* ⚙️ Backend: https://posthub-1-534i.onrender.com

---

## ✨ Features

* 🔍 **Real-time search** using WebSockets
* ⚡ **Instant results** without page reload
* 📡 REST API for initial data fetch
* 🎯 Search across **title + content**
* 💡 Clean, modern UI (SaaS-style design)
* 🌍 Fully deployed (Frontend + Backend)

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS (Custom UI)

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* WebSocket (ws)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ⚙️ Architecture

```text
Frontend (React)
   │
   ├── REST API → Fetch initial posts
   │
   └── WebSocket → Real-time search
           │
        Backend (Node.js + Express)
           │
        MongoDB Atlas
```

---

## 🔌 API Endpoints

### Get all posts

```
GET /api/posts
```

### Fetch & store posts (one-time)

```
GET /api/posts/fetch
```

---

## 🔄 WebSocket Usage

* Connect to:

```
wss://posthub-1-534i.onrender.com
```

* Send search query:

```js
ws.send("coding");
```

* Receive filtered posts in real-time

---

## 🛠️ Setup Instructions (Local)

### 1. Clone repo

```bash
git clone https://github.com/Amit-code01/posthub.git
cd posthub
```

---

### 2. Backend setup

```bash
cd backend
npm install
```

Create `.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

Run:

```bash
node server.js
```

---

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_WS_URL=ws://localhost:5000
```

Run:

```bash
npm run dev
```

---

## 🔐 Environment Variables

### Backend

* `MONGO_URI`

### Frontend

* `VITE_API_URL`
* `VITE_WS_URL`

---

## 📌 Key Learnings

* Implemented **WebSocket-based real-time search**
* Managed **state synchronization between REST + WS**
* Handled **deployment constraints (WSS vs WS)**
* Built a **production-ready full-stack app**

---

## 🚀 Future Improvements

* Authentication system
* User-specific posts
* Pagination & infinite scroll
* Debounced search optimization
* Better error handling

---

## 👨‍💻 Author

**Amit Yadav**

* GitHub: https://github.com/Amit-code01

---

## ⭐ If you like this project

Give it a star ⭐ and share feedback!
