# 🐜 PestCare - Pest Control Service Management Platform

PestCare is a responsive frontend web application for managing pest control services and customer bookings.

The platform allows customers to explore pest control services, create an account, book a service, and manage their appointments through a personal dashboard.

---

## 🚀 Features

- 🏠 Responsive Home Page
- 🐜 Pest Control Services
- 📖 About Page
- 📩 Contact Form
- 📅 Service Booking
- 🔐 User Registration
- 🔑 User Login
- 🛡️ Protected Dashboard
- 👤 Profile Management
- 📋 Booking Management
- ❌ Cancel Booking
- 📱 Responsive Design
- 🔔 Form Validation
- 💾 LocalStorage-based data management
- 🧭 React Router navigation

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router DOM
- React Icons
- Vite

### Data Storage

- Browser LocalStorage

> This project currently uses LocalStorage for frontend demonstration purposes. A backend/API can be integrated in the future for real authentication and persistent database storage.

---

## 📂 Project Structure

```text
Pest-Control-Service-Management/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Booking.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

✨ Main Features
🔐 Authentication

Users can:

Create an account
Login using registered credentials
Access a protected dashboard
Logout from the frontend session
📅 Service Booking

Customers can book services by providing:

Full Name
Email
Phone Number
Pest Control Service
Property Type
Preferred Date
Preferred Time
Address
Problem Description

The booking form includes client-side validation.

📊 Customer Dashboard

The dashboard provides:

Total bookings
Upcoming bookings
Completed bookings
Cancelled bookings
Customer profile
Booking history
Booking details
Booking cancellation
👤 Profile Management

Users can update:

Full Name
Email
Phone Number

The updated information is stored in LocalStorage.

📱 Responsive Design

The application is designed to work across:

Desktop
Tablet
Mobile

Responsive layouts are implemented using Tailwind CSS.

🔄 Application Flow
Home
  │
  ├── Services
  │      │
  │      └── Book Service
  │
  ├── Register
  │      │
  │      └── Login
  │             │
  │             └── Dashboard
  │                    │
  │                    ├── View Profile
  │                    ├── Edit Profile
  │                    ├── View Bookings
  │                    ├── Cancel Booking
  │                    └── Book Service
  │
  ├── About
  │
  └── Contact
⚙️ Installation
1. Clone the repository
git clone https://github.com/sonikumkum/Pest-Control-Service-Management.git
2. Navigate to the project
cd Pest-Control-Service-Management
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open in browser
http://localhost:5173/
📦 Available Scripts
Start development server
npm run dev
Build production version
npm run build
Preview production build
npm run preview
🧪 Validation

The application includes client-side validation for:

Required fields
Email format
Phone number format
Password length
Password confirmation
Booking details
Contact form fields
🔒 Protected Routes

The Dashboard is protected using a custom React component:

ProtectedRoute.jsx

Unauthenticated users attempting to access the Dashboard are redirected to the Login page.

💾 Data Storage

For this frontend-only version, application data is stored using browser LocalStorage.

Example storage keys:

pestCareUser
pestCareBookings
isLoggedIn
userEmail

This approach is intended for demonstration and portfolio purposes.

🔮 Future Improvements

The project can be extended with:

REST API integration
FastAPI / Node.js backend
MySQL database
Secure authentication
JWT-based authorization
Admin dashboard
Service provider management
Online payment integration
Email notifications
Appointment reminders
Booking status updates
Real-time notifications
🎯 Project Objective

The main objective of PestCare is to demonstrate practical frontend development skills including:

React component development
React Hooks
React Router
Form handling
Form validation
LocalStorage
Protected routes
Responsive UI development
Reusable components
State management
User-friendly dashboard design
👩‍💻 Developer

Kumkum Soni

Frontend Developer | React.js | JavaScript | Data Analytics

GitHub

https://github.com/sonikumkum

LinkedIn

https://www.linkedin.com/in/kumkum-soni-9989b4214/

📄 License

This project is created for educational, portfolio, and demonstration purposes.


**Bas:** `README.md` → **Ctrl+A** → ye poora content paste → **Ctrl+S**. ✅

Uske baad mujhe **`done`** bolna. Phir next hum `.gitignore` check karenge.