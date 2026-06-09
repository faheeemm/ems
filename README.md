# Employee Management System (EMS)

A role-based task management web app built with React. Admins can create and assign tasks to employees, while employees can track and update their assigned work — all persisted via localStorage.

---

## Features

- **Authentication** — Login system with role detection (Admin / Employee)
- **Admin Dashboard** — Create tasks, assign them to employees, and monitor progress
- **Employee Dashboard** — View assigned tasks and update their status
- **localStorage Persistence** — Data survives page refreshes without a backend
- **Context API** — Global state management via `AuthContext` and `TaskContext`

---

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/faheeemm/ems.git

# Navigate into the project
cd ems

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## Project Structure

```
src/
├── context/
│   └── AuthProvider.jsx       # Handles login state & user role & Manages task data globally
├── components/
│   ├── Auth/                 # Login screen
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── TaskList/             # Task display & status components
├── utils/
│   └── localStorage.js       # Read/write helpers for persistence
└── App.jsx
```

---

## License

[MIT](./LICENSE) © [Faheem](https://github.com/faheeemm)
