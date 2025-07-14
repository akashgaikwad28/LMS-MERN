
## 🧠 Learning Management System – MERN Stack

An end-to-end **Learning Management System (LMS)** built with the **MERN stack** (MongoDB, Express.js, React, Node.js), enabling instructors to upload courses, students to enroll and track progress, and admins to manage access—all supported by dynamic role-based views and JWT-protected routes.

---

## 🚀 Features

### 🧑‍🏫 Instructor Side
- Course creation with image/video uploads (Cloudinary)
- Lesson management with drag-and-drop support
- Role-based dashboard access and analytics

### 🎓 Student Side
- Browse and filter courses by category
- Purchase handling via route protection
- Track course progress with dynamic updates

### 🔐 Authentication & Access Control
- Login/Register flow with JWT tokens
- Session persistence using `sessionStorage`
- Protected routes with `authenticate` middleware

### 🧰 Admin Features
- Central access to all users and courses
- Delete, view, and toggle permissions for instructors/students

---

## ⚙️ Tech Stack

| Frontend        | Backend              | Dev Tools & APIs         |
|------------------|----------------------|---------------------------|
| React            | Express.js           | Cloudinary for media      |
| Tailwind CSS     | MongoDB + Mongoose   | JWT for authentication    |
| Axios            | Node.js              | Vite + React Router v6    |
| React Context API| Multer for file upload| dotenv, sessionStorage    |

---

## 📦 Installation

### Clone the Repo

```bash
git clone https://github.com/akashgaikwad28/LMS-MERN.git
cd LMS-MERN
```

### Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI="your_mongo_uri"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

Run server:

```bash
npm run dev
```

### Setup Frontend

```bash
cd ../client
npm install
```

Create `.env` file:

```env
VITE_BASE_URL=http://localhost:5000/api/v1
```

Start frontend:

```bash
npm run dev
```

> 🟢 App will open at `http://localhost:5173`

---

## 📁 Folder Structure Highlights

```bash
MERN-LMS/
├── client/     # React frontend
├── server/     # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
```

---

## 💡 Future Enhancements

- Payment gateway integration (e.g., Razorpay/Stripe)
- Certificate generation for completed courses
- Instructor reviews and ratings
- Notification system for course progress updates

---

## 🤝 Acknowledgements

Inspired by real-world LMS platforms and built as part of self-driven learning.  
Special thanks to open-source tutorials and tech documentation.
