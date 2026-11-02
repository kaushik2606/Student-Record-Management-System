# Student Management Frontend

This is the React frontend for the Student Record Management System. It provides a modern, responsive interface to manage student records, including adding, viewing, editing, and deleting student information.

## Features

- Student dashboard with a table layout
- Add new student records
- View detailed student information
- Edit existing student profiles
- Delete records with confirmation
- Search and data management workflow
- Bootstrap-based responsive UI
- Integration with backend REST APIs

## Tech Stack

- React.js
- React Router
- Bootstrap 5
- Axios
- SweetAlert2
- JavaScript

## Project Structure

```text
student_management/
├── public/
├── src/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── AddStudents.jsx
│   ├── EditStudents.jsx
│   ├── NavHeader.jsx
│   ├── index.js
│   └── App.css
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Node.js 18+
- npm
- Backend server running at `http://localhost:5000`

## Setup and Run

1. Install dependencies:

```bash
cd student_management
npm install
```

2. Start the frontend development server:

```bash
npm start
```

3. Open the application in the browser:

```text
http://localhost:3000
```

## Backend Connection

The frontend communicates with the backend using Axios and expects:

```text
http://localhost:5000/api/students
```

Make sure the backend service is running before using the app.

## Main Pages

- `/` — All students dashboard
- `/addStudents` — Add a new student
- `/editStudents/:studentId` — Update student details

## Notes

- The frontend depends on the backend API for all CRUD operations.
- If MongoDB or the backend service is unavailable, the UI will not be able to fetch or save student records.

