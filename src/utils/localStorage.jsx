const employees = [
  {
    id: 1,
    firstName: "Faheem",
    email: "faheem@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue in app.",
        taskDate: "2026-05-21",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription: "Redesign employee dashboard UI.",
        taskDate: "2026-05-18",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly backup of database.",
        taskDate: "2026-05-17",
        category: "Database",
      },
    ],
  },

  {
    id: 2,
    firstName: "Ufraan",
    email: "kurosen930@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API",
        taskDescription: "Develop REST API for products.",
        taskDate: "2026-05-20",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate pull requests.",
        taskDate: "2026-05-18",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation.",
        taskDate: "2026-05-22",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Server",
        taskDescription: "Deploy backend server to production.",
        taskDate: "2026-05-16",
        category: "DevOps",
      },
    ],
  },

  {
    id: 3,
    firstName: "Santra",
    email: "santra@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create responsive landing page design.",
        taskDate: "2026-05-21",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for speed.",
        taskDate: "2026-05-19",
        category: "Optimization",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with client.",
        taskDate: "2026-05-23",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway Test",
        taskDescription: "Test online payment integration.",
        taskDate: "2026-05-15",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Update",
        taskDescription: "Improve navigation responsiveness.",
        taskDate: "2026-05-14",
        category: "Frontend",
      },
    ],
  },

  {
    id: 4,
    firstName: "Raqueeb",
    email: "raqueeb@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Check application vulnerabilities.",
        taskDate: "2026-05-24",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure deployment pipeline.",
        taskDate: "2026-05-18",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor Logs",
        taskDescription: "Track server logs and errors.",
        taskDate: "2026-05-22",
        category: "Monitoring",
      },
    ],
  },

  {
    id: 5,
    firstName: "Faheem",
    email: "faheemahmedhyd82@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Mobile App Testing",
        taskDescription: "Test app on Android and iOS devices.",
        taskDate: "2026-05-21",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Reporting",
        taskDescription: "Report UI and functional bugs.",
        taskDate: "2026-05-18",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Analyze app load performance.",
        taskDate: "2026-05-17",
        category: "Performance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Check",
        taskDescription: "Ensure accessibility compliance.",
        taskDate: "2026-05-23",
        category: "QA",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees)); // set employees data
  localStorage.setItem("admin", JSON.stringify(admin)); // set admin data
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")); // get emplyees data
  const admin = JSON.parse(localStorage.getItem("admin")); // get admin data

  return { employees, admin };
};
