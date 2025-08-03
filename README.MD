
```markdown
#  Learning Management System – MERN Stack + Gemini Chatbot

An end-to-end **Learning Management System (LMS)** built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and enhanced with a modular **Gemini-powered chatbot** via LangChain. Instructors can upload and manage courses, students can learn and track progress, and admins maintain control—all protected by JWT authentication and dynamic role-based views.

---

##  Features

###  Instructor Panel
- Course creation with Cloudinary-based media uploads
- Modular lesson builder with drag-and-drop interface
- Dashboard with analytics and role-based data control

###  Student Panel
- Course browsing with category-based filters
- Enrollment and secure payment flow (via route protection)
- Real-time course tracking and progress updates

###  Authentication & Access Control
- JWT-based login/register flow
- Protected routes via middleware
- Session persistence with `sessionStorage`

###  Admin Panel
- Central control of courses and user roles
- Delete/view/toggle access for instructors/students

---

##  Chatbot Integration (Gemini + LangChain)

A dedicated chatbot microservice built with **FastAPI** and **LangChain**, enabling users to interact naturally with your LMS:

| Capability               | Description                                       |
|--------------------------|---------------------------------------------------|
|  Course Recommendations | Personalized suggestions using Gemini prompts     |
|  Concept Explanations   | Answers to subject-specific queries                |
|  FAQ Handling           | Curated answers based on LMS knowledge base       |
|  Student Counseling     | Guidance on course paths and tech stacks          |
|  LMS API Access         | Real-time data via internal APIs                  |

###  Tech Stack (Chatbot)

| Component           | Description                        |
|---------------------|------------------------------------|
| Gemini              | via `langchain-google-genai`       |
| Orchestration       | LangChain agents/tools/prompts     |
| Backend             | FastAPI with async endpoint support|
| Config              | `.env` loaded via `pydantic-settings`|
| Dependencies        | Managed using `uv` + `pyproject.toml`|

---

##  Monorepo Architecture Overview

```bash
LMS-System/
├── client/               # React + Vite frontend
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── server/               # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
├── lms-chatbot/          # Gemini chatbot microservice
│   ├── agents/
│   ├── chains/
│   ├── prompts/
│   ├── tools/
│   ├── config/
│   └── main.py
```

---

##  Tech Summary

| Frontend           | Backend               | Dev Tools & APIs         |
|--------------------|-----------------------|---------------------------|
| React + Vite       | Node.js + Express     | Cloudinary (uploads)      |
| Tailwind CSS       | MongoDB + Mongoose    | JWT (auth)                |
| React Context API  | Multer (media uploads)| dotenv, sessionStorage    |
| Axios              | FastAPI (chatbot)     | LangChain + Gemini        |

---

##  Installation Guide

### 1️⃣ LMS (Frontend + Backend)

```bash
git clone https://github.com/akashgaikwad28/LMS-MERN.git
cd LMS-MERN
```

#### Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI="your_mongo_uri"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

Run backend:

```bash
npm run dev
```

#### Setup Frontend

```bash
cd ../client
npm install
```

Create `.env`:

```env
VITE_BASE_URL=http://localhost:5000/api/v1
```

Run frontend:

```bash
npm run dev
```

> LMS will be live at `http://localhost:5173`

---

### 2️⃣ Chatbot Microservice

```bash
git clone https://github.com/akashgaikwad28/lms-chatbot.git
cd lms-chatbot
```

Install dependencies:

```bash
npx @manzt/uv pip install
```

Create `.env`:

```env
GEMINI_API_KEY=your_google_gemini_key
LMS_API_BASE_URL=http://localhost:5000/api/v1
```

Run chatbot:

```bash
npx @manzt/uv run uvicorn main:app --reload
```

###  Test Chat Endpoint

```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d "{\"user_query\": \"What course should I take to improve my React skills?\"}"
```

---

##  Planned Enhancements

- Course certification with auto-generation
- Review/rating system for instructors
- Push notifications for course updates
- Voice-based chatbot interaction via frontend

---

