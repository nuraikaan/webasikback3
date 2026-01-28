# Assignment 4 – Secure Online Store API with RBAC
**Student:** Nurai  
**Course:** [Your course name]  
**Submission Date:** January 2026

## Project Description

This project is an improved and secured version of the simple online store from Assignment 3.  
It demonstrates:

- Modular Express.js architecture (MVC-inspired)
- Secure user authentication with password hashing (bcrypt)
- JWT-based authorization
- Role-Based Access Control (RBAC): admin vs regular user
- Full CRUD operations for two related models: **Product** and **Review**

## Two Main Objects (Entities)

1. **Product** (Primary object)  
   - Fields: name, price, category (string), description  
   - Managed only by admins (create, update, delete)

2. **Review** (Secondary object – related to Product)  
   - Fields: product (reference), user (reference), rating (1–5), comment  
   - Can be created by any logged-in user; visible publicly

**Relationship:** One-to-Many (one Product → many Reviews)

## Security Features

- Passwords are hashed with **bcrypt** before saving (never stored in plain text)
- **JWT** tokens issued on login and verified on protected routes
- **Middleware**:
  - `auth.js` – checks valid JWT and attaches user to request
  - `admin.js` – restricts POST/PUT/DELETE to users with role = "admin"
- Public routes: GET /products, GET /reviews/:productId
- Protected routes: POST/PUT/DELETE products (admin only), POST reviews (logged-in users only)

## Project Structure
