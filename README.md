// Update Project name to MediConnect from all files also in deployment.

URLs:-

Frontend URL :- https://prescripto-0oze.onrender.com

Admin URL :- https://mediconnect-admin-r4m2.onrender.com/

Backend URL :- https://prescripto-backend-7tng.onrender.com

ID & PASS:-

Admin :- id: admin@gmail.com pass: admin123

Frontend :-

Backend :-
# 🚀 Demo Video Link


# 🚀 MediConnect

Your gateway to secure and hassle-free doctor bookings.

Find trusted doctorModel, view availability, and book appointments instantly—convenient, reliable healthcare at your fingertips, anytime you need it.

![MediConnect](https://github.com/iampraveen08/MediConnect/blob/main/frontend/src/assets/)

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Assets](#-assets)
- [Suggestions or Feedback](#-suggestions-or-feedback)
- [Like This Project?](#-like-this-project)

---

## ✨ Features

- 🔥
- ⚡
- 🎨 Clean, responsive UI with **TailwindCSS**
- 💌 Working contact form using **EmailJS**
- 🧱
- 🚀 Lightning-fast development with **Vite**

---

## 🛠 Tech Stack

| Tech              | Description                           |
|-------------------|---------------------------------------|
| React             | Front-end JavaScript library          |
| Vite              | Fast bundler and dev environment      |
| TailwindCSS       | Utility-first CSS framework           |
| React Three Fiber |   |
| Drei              | Helpers and abstractions for R3F      |
| Framer Motion     | Animation library for React           |
| EmailJS           | Form handling and email integration   |
| Aceternity UI     | Custom UI components                  |
| Magic UI          | Prebuilt UI elements and design extras|

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images
│   ├── models/             # 
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   ├── constants/          # Reusable datas
│   ├── sections/           # 
│   ├── App.jsx             # Main app file
│   ├── index.css           # Tailwind css
│   └── main.jsx            # Entry point
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/iampraveen08/MediConnect.git
cd frontend
```
2. Install Dependencies
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```
The app will be available at http://localhost:5173.

---

## 🔗 Assets
Assets used in the project can be found [here](https://github.com/user-attachments/files/19820923/public.zip)

---

---

## 💡 Suggestions or Feedback?
Leave a comment on the open an issue here on GitHub.

👉 What should I build next?

- A beautiful Landing Page

Or another interactive project?

Let me know!

---

## ⭐ Like This Project?
Star the repo.

**High‑Level Summary of the **MediConnect** Repository**

---

### What the project is
MediConnect is a full‑stack web application that enables patients to find doctors, view their availability, and book appointments online. It consists of three main parts:

| Part | Purpose |
|------|---------|
| **frontend** | React (Vite) SPA that provides the user‑facing UI: home page, doctor listings, profile management, appointment booking, etc. |
| **admin** | Separate React admin panel (also built with Vite) for administrators to manage doctors, view all appointments, and perform admin‑level actions. |
| **backend** | Node.js/Express API with MongoDB for data storage, handling authentication, doctor/user management, appointments, and payment integration (Razorpay & Stripe). |

---

### Key Features

| Area | Highlights |
|------|------------|
| **User Flow** | • Registration / login <br>• View and edit personal profile <br>• Browse doctors, see details & fees <br>• Book appointment slots <br>• View / cancel appointments <br>• Payments via Razorpay or Stripe |
| **Doctor Flow** | • Login with credentials <br>• Dashboard showing upcoming appointments <br>• Update availability, manage profile, mark appointments as completed |
| **Admin Flow** | • Admin login (hard‑coded credentials) <br>• Add new doctors (with image upload) <br>• View all appointments, cancel them, change doctor availability <br>• Dashboard with aggregate data |
| **Payment** | Integrated with both Razorpay and Stripe, with endpoints for creating payments and verifying them. |
| **File Uploads** | Uses Multer for handling image uploads (doctor profile pictures, user avatars). |
| **Cloud Storage** | Cloudinary is configured for storing uploaded images. |
| **Security** | JWT based authentication for users, doctors, and admins. Environment variables hold secrets (JWT secret, DB URI, Cloudinary keys, payment keys). |
| **Styling** | Tailwind CSS throughout both front‑end and admin UI. |
| **Routing** | React Router v7 on the client side; Express routers (`adminRoute`, `doctorRoute`, `userRoute`) on the server side. |

---

### Project Structure

```
MediConnect/
├─ .gitignore
├─ README.md
├─ admin/          ← Admin React app
│   ├─ src/
│   │   ├─ App.jsx, App.css, main.jsx
│   │   ├─ component/   (AdminLogin, Dashboard, Sidebar, etc.)
│   │   └─ Pages/Doctor/ (DoctorDashboard, DoctorAppointments, DoctorProfile)
│   └─ vite.config.js
├─ backend/        ← Express API
│   ├─ config/      (cloudinary.js, mongodb.js)
│   ├─ controllers/ (adminController.js, doctorController.js, userController.js)
│   ├─ middleware/ (authAdmin.js, authDoctor.js, authUser.js, multer.js)
│   ├─ models/     (appointmentModel.js, doctorModel.js, userModel.js)
│   ├─ routes/     (adminRoute.js, doctorRoute.js, userRoute.js)
│   └─ server.js
└─ frontend/       ← Patient‑facing React app
    ├─ src/
    │   ├─ App.jsx, App.css, main.jsx
    │   ├─ components/ (Navbar, Footer, Home, DoctorDetail, BookingSlot, etc.)
    │   └─ pages/ (AllDoctors.jsx)
    └─ vite.config.js
```

---

### Important Configurations

| File | Role |
|------|------|
| **backend/.env** | Holds DB connection string, JWT secret, Cloudinary credentials, Razorpay keys, admin email/password. |
| **backend/config/mongodb.js** | Connects to MongoDB (adds `/prescripto` DB suffix). |
| **backend/config/cloudinary.js** | Sets up Cloudinary with env vars. |
| **backend/middleware/auth*.js** | JWT verification for each user type (admin, doctor, user). |
| **backend/routes/** | Defines REST endpoints for each role. |
| **frontend/src/components/** | UI components for the public site (home, doctor cards, booking UI, etc.). |
| **admin/src/component/** | UI components for admin portal (doctor list, appointments, sidebar navigation). |

---

### Development Scripts

| Location | Command | What it does |
|----------|---------|--------------|
| `admin/package.json` | `npm run dev` | Starts Vite dev server for admin panel. |
| `frontend/package.json` | `npm run dev` | Starts Vite dev server for the public site. |
| `backend/package.json` | `npm run dev` (or `npm run server`) | Runs the Express API with nodemon. |

---

### Potential Next Steps / Improvements

1. **Replace hard‑coded admin credentials** with a proper admin model and secure login flow.  
2. **Environment variable safety** – ensure `.env` isn’t committed and add a sample `.env.example`.  
3. **Validation & error handling** – strengthen request validation (e.g., using `express-validator`).  
4. **Testing** – add unit/integration tests for both front‑end components and back‑end routes.  
5. **Deployment** – configure Dockerfiles or CI/CD pipelines; host front‑end on a static site (Netlify/Vercel) and back‑end on a Node‑compatible platform (Render, Railway, etc.).  
6. **Pagination & filtering** – for doctor listings and appointments when data grows.  
7. **Role‑based UI** – separate navigation for users, doctors, and admins more cleanly.

---

### TL;DR

MediConnect is a complete doctor‑appointment platform built with a React/Vite front‑end, a separate React admin panel, and an Express/MongoDB back‑end. It handles user registration, doctor management, appointment scheduling, and payments, using JWT for authentication and Tailwind CSS for styling. The repo is well‑organized into `frontend`, `admin`, and `backend` directories, each with its own configuration, routes, and components.
