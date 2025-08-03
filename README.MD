
````markdown
# Learning Management System – MERN Stack + Gemini Chatbot

A full-featured **Learning Management System (LMS)** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with a separate **FastAPI-based Gemini-powered chatbot** microservice integrated using LangChain. Instructors can manage courses, students can learn and track their progress, and admins can control the platform with full authentication and role-based routing.

---

## Features

### Instructor Panel
- Create, update, and delete courses
- Upload course media using Cloudinary
- Drag-and-drop lesson builder
- Dashboard with analytics

### Student Panel
- Browse courses with filtering by category
- Enroll securely with route protection
- Track course progress in real-time

### Authentication & Access Control
- JWT-based authentication
- Role-based routing (instructor, student, admin)
- Session persistence using sessionStorage

### Admin Panel
- View, approve, or remove instructors and students
- Centralized access to all courses
- Manage platform-level data

---

## Chatbot Integration (Gemini + LangChain)

A dedicated chatbot microservice is included to provide intelligent assistance for LMS users.

| Feature                  | Description                                             |
|--------------------------|---------------------------------------------------------|
| Course Recommendations   | Suggest courses based on user interests and keywords    |
| Concept Explanations     | Answer academic questions and technical topics          |
| FAQ Handling             | Address common user questions                           |
| Student Counseling       | Help users choose a course via guided Q&A               |
| LMS API Access           | Retrieve real-time data from LMS via internal APIs      |

### Tech Stack for Chatbot

| Component         | Details                                      |
|------------------|----------------------------------------------|
| Gemini API       | Via `langchain-google-genai`                 |
| Orchestration    | LangChain agents, chains, and tools          |
| Backend          | FastAPI with async endpoints                 |
| Config Handling  | Pydantic Settings with `.env` support        |
| Python Env       | Managed using `uv` and `pyproject.toml`      |

---

## Monorepo Architecture

```bash
LMS-System/
├── client/               # React + Vite frontend
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── server/               # Express.js backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
├── lms-chatbot/          # Gemini chatbot (FastAPI microservice)
│   ├── agents/
│   ├── chains/
│   ├── prompts/
│   ├── tools/
│   ├── config/
│   └── main.py
````

---

## Tech Summary

| Layer         | Stack Used                              |
| ------------- | --------------------------------------- |
| Frontend      | React + Vite + Tailwind CSS             |
| Backend       | Node.js + Express + MongoDB (Mongoose)  |
| Auth          | JWT + React Context API                 |
| Media Uploads | Cloudinary + Multer                     |
| Chatbot       | FastAPI + LangChain + Gemini            |
| State         | Session persistence with sessionStorage |

---

## Installation Guide

### 1. LMS Application (Frontend + Backend)

```bash
git clone https://github.com/akashgaikwad28/LMS-MERN.git
cd LMS-MERN
```

#### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

Run backend server:

```bash
npm run dev
```

#### Frontend Setup

```bash
cd ../client
npm install
```

Create `.env` file:

```env
VITE_BASE_URL=http://localhost:5000/api/v1
```

Run frontend server:

```bash
npm run dev
```

LMS will be accessible at `http://localhost:5173`

---

### 2. Chatbot Microservice (FastAPI)

```bash
git clone https://github.com/akashgaikwad28/lms-chatbot.git
cd lms-chatbot
```

Install dependencies:

```bash
npx @manzt/uv pip install
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
LMS_API_BASE_URL=http://localhost:5000/api/v1
```

Run the chatbot server:

```bash
npx @manzt/uv run uvicorn main:app --reload
```

#### Test Chat Endpoint

```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"user_query": "What course should I take to improve my React skills?"}'
```

---

## Planned Enhancements

* Auto-generated certificates upon course completion
* Rating and review system for each course
* Push notifications for deadlines and new courses
* Voice-based chatbot for accessibility and interactivity

