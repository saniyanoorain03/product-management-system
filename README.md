# ProductHub - MERN Stack Product Management System

## 📌 Overview

ProductHub is a full-stack Product Management System developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to manage products efficiently through a modern dashboard interface with CRUD operations, analytics, search functionality, and responsive design.

---

## 🚀 Features

- ✅ Add Products
- ✅ View Products
- ✅ Update Products
- ✅ Delete Products
- ✅ Search Products
- ✅ Product Dashboard
- ✅ Analytics Page with Charts
- ✅ Responsive User Interface
- ✅ Multi-Page Navigation
- ✅ MongoDB Database Integration
- ✅ REST API Backend
- ✅ Modern UI using Tailwind CSS

---

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Recharts

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
product-management-system
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── assets
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── models
│   │   └── Product.js
│   │
│   ├── routes
│   │   └── productRoutes.js
│   │
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/saniyanoorain03/product-management-system.git
```

### 2. Navigate to Project

```bash
cd product-management-system
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

or

```bash
nodemon server.js
```

---

## Frontend Setup

```bash
cd client
npm install
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 Application Pages

### Home
Landing page introducing ProductHub.

### Products
Manage products with CRUD operations.

### Analytics
View charts and inventory insights.

### About
Information about the project and its objectives.

---

## 📊 Key Functionalities

- Product Creation
- Product Retrieval
- Product Update
- Product Deletion
- Product Search
- Analytics Visualization
- Inventory Statistics

---

## 🎯 Project Objective

The objective of ProductHub is to provide a simple and efficient solution for inventory and product management while demonstrating practical implementation of full-stack web development using MERN Stack technologies.

---
## 👨‍💻 Author

**Saniya D**

Built as a MERN Stack project to demonstrate full-stack web development, database integration, REST APIs, routing, and dashboard analytics.

---

## 📜 License

This project is developed for educational and learning purposes.
