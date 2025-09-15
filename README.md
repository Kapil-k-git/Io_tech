# 🌐 Company Website Test Task

This project is a **dynamic, multilingual company website** built with **Next.js**, **Tailwind CSS**, and **Strapi CMS**. It features responsive design, dynamic content, and a subscription form with validation.

---

## 📌 Table of Contents
1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Folder Structure](#folder-structure)  
5. [Setup Instructions](#setup-instructions)  
6. [Functional Details](#functional-details)  
7. [Design Guidelines](#design-guidelines)  
8. [Performance Considerations](#performance-considerations)  

---

## 🖥 Project Overview

This website includes:  
- Responsive **Header Navigation** with search and language toggle  
- **Hero Section** with image/video slider  
- **Our Team** section with dynamic team member display  
- **Clients** section showcasing logos and testimonials  
- **Footer** with links and email subscription form  

All content is **managed dynamically via Strapi CMS** and supports **English (EN)** and **Arabic (AR)** with **RTL layout** for Arabic.

---

## ✨ Features

### 1️⃣ Header Navigation
- Responsive navbar with **logo, links, and Services dropdown**  
- Dropdown with **brown background**  
- **Search** icon opens input, redirects to search page  
- **Language toggle:** AR/EN with RTL support for Arabic  

### 2️⃣ Hero Section
- Background supports **images/videos** from CMS  
- **Slider:** Auto-play for videos, smooth transitions for images  
- Multilingual text with **RTL support**  

### 3️⃣ Our Team
- Display **team members** with image, name, and role  

### 4️⃣ Clients
- Showcase **client logos, testimonials, and case studies**  
- Multilingual support with RTL for Arabic  

### 5️⃣ Footer
- Links and **subscription form**  
- **Formik validation** with duplicate prevention  
- Success/error messages  
- Multilingual with RTL for Arabic  

---

## 🛠 Tech Stack

**Frontend:**  
- Next.js (Routing, SSR/SSG)  
- Tailwind CSS (Dark theme: brown, white, black)  
- Redux Toolkit (State management: search, language, form states)  
- Formik (Form handling & validation)  
- i18next / next-intl (Multilingual & RTL support)  

**Backend:**  
- Strapi CMS (Manage Pages, Services, Team Members, Clients, Blog, Subscribers)  
- REST API for content fetching and form submissions  

---


