# Student Record Management System

A full-stack student management application built with React on the frontend and Express.js + MongoDB on the backend. It helps manage student records with add, view, update, and delete functionality.

## Features

- Add new student records
- Display student details in a dashboard
- Edit and update existing records
- Delete student records with confirmation
- Store data in MongoDB
- Responsive UI built with Bootstrap

## Tech Stack

- Frontend: React.js, React Router, Bootstrap, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose

## Project Structure

```text
Student Record Management System/
├── backend_side/
│   ├── config/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   └── package.json
├── student_management/
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── .gitignore
```

## Setup Instructions

### 1. Install backend dependencies

```bash
cd backend_side
npm install
```

Create a `.env` file in `backend_side` with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/student_record
```

Start the backend:

```bash
npm run dev
```

### 2. Install frontend dependencies

```bash
cd ../student_management
npm install
```

Start the frontend:

```bash
npm start
```

The frontend runs at `http://localhost:3000` and the backend runs at `http://localhost:5000`.

## API Overview

Base URL: `http://localhost:5000/api/students`

- `GET /api/students` — Get all students
- `POST /api/students` — Add a student
- `GET /api/students/:studentId` — Get one student
- `PUT /api/students/:studentId` — Update a student
- `DELETE /api/students/:studentId` — Delete a student

## Notes

- Make sure MongoDB is running before starting the backend.
- This project is suitable for student administration and academic record tracking.

