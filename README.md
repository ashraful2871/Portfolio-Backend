Perfect 👍 — here’s a **complete, professional `README.md`** specifically for the **backend** of your Portfolio Website (ExpressJS + Prisma + JWT).
You can copy and paste this directly into your `backend/` folder.

---

# 🧩 Portfolio Website – Backend (ExpressJS + Prisma)

This is the **backend API** for the **Personal Portfolio Website**, providing secure authentication, blog management, and project management functionality. It is built using **Node.js**, **Express.js**, **Prisma ORM**, and **JWT authentication** for secure access control.

---

## 📖 Table of Contents

* [Overview](#-project-overview)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Setup & Installation](#-setup--installation)
* [Environment Variables](#-environment-variables)
* [Available Scripts](#-available-scripts)
* [API Endpoints](#-api-endpoints)
* [Authentication Flow](#-authentication-flow)
* [Seeding Admin User](#-seeding-admin-user)
* [Deployment](#-deployment)
* [License](#-license)

---

## 💡 Project Overview

This backend service handles all data operations and secure routes for the portfolio website.
It powers:

* Owner authentication and authorization
* CRUD operations for blog posts and projects
* Secure, RESTful APIs consumed by the frontend (Next.js)
* Integration with Prisma ORM and PostgreSQL for data persistence

---

## ✨ Features

* 🔐 **JWT-based Authentication** (Login for admin/owner only)
* 🔑 **Authorization Middleware** – restrict access to private routes
* 🧑‍💻 **Blog Management** – CRUD endpoints for managing blog posts
* 🧱 **Project Management** – CRUD endpoints for project data
* 🔄 **Prisma ORM** – robust database management and migrations
* 🧂 **bcrypt** – password hashing for security
* ⚙️ **CORS + dotenv + Express Middleware** setup
* 🧰 **Seed Admin User** – auto-created admin for initial login

---

## 🧰 Tech Stack

| Component          | Technology                                        |
| ------------------ | ------------------------------------------------- |
| **Runtime**        | Node.js                                           |
| **Framework**      | Express.js                                        |
| **Database ORM**   | Prisma                                            |
| **Database**       | PostgreSQL (or MongoDB with Mongoose alternative) |
| **Authentication** | JWT + bcrypt                                      |
| **Environment**    | dotenv                                            |
| **Validation**     | express-validator (optional)                      |

---

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── prisma/
│   │   ├── schema.prisma         # Prisma schema definition
│   │   └── seed.ts               # Script to seed admin user
│   ├── routes/
│   │   ├── auth.routes.ts        # Auth routes (login/register)
│   │   ├── blog.routes.ts        # Blog CRUD routes
│   │   └── project.routes.ts     # Project CRUD routes
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── blog.controller.ts
│   │   └── project.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts    # JWT verification middleware
│   ├── utils/
│   │   ├── jwt.ts                # Token generation & verification
│   │   ├── bcrypt.ts             # Password hashing & comparison
│   ├── app.ts                    # Express app setup
│   └── server.ts                 # Server entry point
│
├── prisma/
│   └── migrations/               # Prisma migration files
│
├── .env
├── package.json
└── tsconfig.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
gt clone https://github.com/ashraful2871/Portfolio-Backend.git
cd portfolio-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Database with Prisma

Update the database connection string in `.env` and run:

```bash
npx prisma migrate dev --name init
```

Then seed the database:

```bash
npx prisma db seed
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend root directory:

```bash
# Server
PORT=5000

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"

# JWT
JWT_SECRET="your_jwt_secret_key"

# (Optional) For Prisma
SHADOW_DATABASE_URL="postgresql://username:password@localhost:5433/portfolio_shadow"
```

---

## 🧮 Available Scripts

| Command                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `npm run dev`            | Start the server in development mode (using nodemon) |
| `npm run build`          | Build the project for production                     |
| `npm start`              | Run compiled production build                        |
| `npx prisma migrate dev` | Apply database migrations                            |
| `npx prisma studio`      | Open Prisma Studio to explore DB                     |
| `npx prisma db seed`     | Seed the database with an admin user                 |

---

## 📡 API Endpoints

| Method     | Endpoint             | Description                   | Auth Required |
| ---------- | -------------------- | ----------------------------- | ------------- |
| **POST**   | `/api/auth/login`    | Authenticate admin user       | ❌             |
| **POST**   | `/api/auth/register` | Register new admin (optional) | ❌             |
| **GET**    | `/api/blogs`         | Get all blogs                 | ❌             |
| **GET**    | `/api/blogs/:id`     | Get single blog by ID         | ❌             |
| **POST**   | `/api/blogs`         | Create a new blog             | ✅             |
| **PUT**    | `/api/blogs/:id`     | Update a blog                 | ✅             |
| **DELETE** | `/api/blogs/:id`     | Delete a blog                 | ✅             |
| **GET**    | `/api/projects`      | Get all projects              | ❌             |
| **POST**   | `/api/projects`      | Add new project               | ✅             |
| **PUT**    | `/api/projects/:id`  | Update project                | ✅             |
| **DELETE** | `/api/projects/:id`  | Delete project                | ✅             |

✅ = Requires JWT token in `Authorization` header (`Bearer <token>`)

---

## 🔐 Authentication Flow

1. **Admin logs in** using email and password → `/api/auth/login`
2. Server validates credentials using **bcrypt**
3. If valid, generates a **JWT token**
4. Client stores token (localStorage or cookie)
5. Private routes include token in Authorization header
6. Middleware validates token before granting access

---


Run:

```bash
npx prisma db seed
```

---

## 🚀 Deployment

You can deploy this backend on platforms such as:

* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Fly.io](https://fly.io/)
* [Vercel Functions](https://vercel.com/docs/functions) *(for smaller APIs)*

Make sure to:

* Set your environment variables on the hosting platform.
* Use a managed PostgreSQL provider like [Neon](https://neon.tech/) or [Supabase](https://supabase.com/).

---

## 🧠 Notes

* Passwords are **securely hashed** using bcrypt.
* JWT tokens should be stored securely on the client (preferably HTTP-only cookies).
* Prisma migrations automatically track schema changes.
* CORS is configured to allow requests from the frontend domain.

---

## 🧑‍💻 Author

**Your Name**
📧 [your.email@example.com](mailto:your.email@example.com)
🌐 [yourwebsite.com](https://yourwebsite.com)

---

## 📄 License

This project is licensed under the **MIT License**.

---

Would you like me to:

* Fill in your **name and contact info**,
* Specify the **database** (PostgreSQL or MongoDB), and
* Add the **actual API base URL** for deployment?

I can finalize a polished version with those details so you can paste it directly into your repo.
