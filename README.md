<div align="center">

# 🛍️ Radhe E-Commerce — Full-Stack Clothing Store

A MERN e-commerce application with a customer storefront, an admin panel for products and orders, and checkout through **Stripe**, **Razorpay** or cash on delivery.

![React](https://img.shields.io/badge/React-0B1220?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-0B1220?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0B1220?style=flat-square&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-0B1220?style=flat-square&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-0B1220?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-0B1220?style=flat-square&logo=mongodb)
![Stripe](https://img.shields.io/badge/Stripe-0B1220?style=flat-square&logo=stripe)
![Razorpay](https://img.shields.io/badge/Razorpay-0B1220?style=flat-square&logo=razorpay)
![Cloudinary](https://img.shields.io/badge/Cloudinary-0B1220?style=flat-square&logo=cloudinary)

</div>

---

## ✨ Features

**Storefront**
- Home page with hero, latest collection and best sellers
- Collection page with search, category / sub-category filters and price sorting
- Product page with size selection and related products
- Cart with totals, place-order form and payment verification page
- Customer login / registration and order history

**Admin panel**
- Admin login
- Add products with multiple images (uploaded to Cloudinary), sizes, category, sub-category and best-seller flag
- List and remove products
- View all orders and update order status

**Backend**
- JWT authentication for users and admin; bcrypt password hashing
- Server-side cart stored per user
- Orders via cash on delivery, **Stripe Checkout** and **Razorpay**, each with a verification step

## 🏗️ Architecture

```
Radhe-Ecommerce-App/
├── Pages/, Components/, Context/   # Storefront (React, ShopContext)
├── admin/                          # Admin panel (React + Vite + Tailwind)
└── Backend/                        # REST API (Node.js + Express + MongoDB)
    ├── config/        # MongoDB + Cloudinary
    ├── controllers/   # user, product, cart, order
    ├── middleware/    # user auth, admin auth, Multer
    ├── models/        # User, Product, Order
    └── routes/        # /api/user, /api/product, /api/cart, /api/order
```

- **State:** `ShopContext` (React Context) holds products, cart, search and auth token
- **API endpoints:** `/api/product` (`add`, `listproduct`, `singleproduct/:id`, `removeproduct/:id`), `/api/cart` (`add`, `update`, `get`), `/api/order` (`place`, `stripe`, `razorpay`, `verifyStripe`, `verifyRazorpay`, `list`, `status`, `userorders`), `/api/user` (`register`, `login`, `admin`)

## 🚀 Getting started

**Prerequisites:** Node.js 18+, MongoDB, Cloudinary, and Stripe / Razorpay test keys.

```bash
git clone https://github.com/amritgit786/Radhe-Ecommerce-App.git
cd Radhe-Ecommerce-App
```

**Backend**

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=choose_a_strong_password
STRIPE_SECRET_KEY=sk_test_xxxxx
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_SECRET_KEY=your_razorpay_secret
```

```bash
npm run server   # http://localhost:5000
```

**Admin panel**

```bash
cd admin
npm install
echo "VITE_BACKEND_URL=http://localhost:5000" > .env
npm run dev
```

**Storefront**

The storefront source (`Pages/`, `Components/`, `Context/`, `App.jsx`, `main.jsx`) lives at the repository root. To run it, place it in a Vite React project (`npm create vite@latest frontend -- --template react`), install `axios`, `react-router-dom`, `react-toastify` and Tailwind CSS, then:

```bash
echo "VITE_BACKEND_URL=http://localhost:5000" > .env
npm run dev
```

## 📸 Screenshots

<!-- Add screenshots to /screenshots and reference them here, e.g.
![Home](screenshots/home.png)
![Admin – add product](screenshots/admin-add.png)
-->

## 👤 Author

**Amrit Prajapati** — Senior Frontend & Mobile Developer
[GitHub](https://github.com/amritgit786) · [LinkedIn](https://www.linkedin.com/in/amrit-prajapati) · [Email](mailto:amrit.git786@gmail.com)
