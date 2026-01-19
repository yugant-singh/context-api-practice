# 🛍️ React Product Details App

This is a **beginner‑friendly React project** where I built a product listing and product details feature using **React**, **React Router**, and **Context API**. The main goal of this project was to understand routing, global state management, and how to work with dynamic data in React.

---

## 📌 About the Project

In this project, products are displayed on a listing page. When a user clicks on any product, they are navigated to a **Product Details page**, where full information about the selected product is shown such as:

* Product Image
* Product Title
* Product Price
* Product Rating
* Number of Reviews

The data is managed globally using **Context API**, so it can be accessed easily across different components.

---

## 🚀 Features

* 📦 Product data stored using Context API
* 🧭 Dynamic routing using React Router (`useParams`)
* 🔍 Individual product detail page
* ⏳ Loading state handling to avoid errors
* ⚡ Fast development setup using Vite
* 🧠 Clean and readable component structure

---

## 🛠️ Tech Stack

* **React** – Frontend library
* **React Router DOM** – For page navigation
* **Context API** – Global state management
* **Vite** – Fast development server & bundler
* **CSS** – Basic styling

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Single product card
│   └── ProductDetails.jsx   # Product details page
├── context/
│   └── ProductContext.jsx   # Global product data
├── pages/
│   └── Home.jsx             # Product listing page
├── App.jsx                  # Routes configuration
├── main.jsx                 # App entry point
└── index.css                # Global styles
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/react-product-details-app.git
```

### 2️⃣ Navigate to the project folder

```bash
cd react-product-details-app
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Now open your browser and go to:

```
http://localhost:5173
```

---

## 🧠 What I Learned from This Project

* How to use **Context API** to manage global data
* How to create **dynamic routes** using React Router
* How to use `useParams()` to get route parameters
* Why React cannot render objects directly
* How to avoid runtime errors using conditional rendering
* How to structure a small React project properly

---

## ❗ Common Issues Faced

* ❌ Error: *Objects are not valid as a React child*

  * ✅ Fixed by accessing object properties like `rating.rate` instead of rendering the whole object

* ❌ `undefined` errors on page refresh

  * ✅ Fixed using loading checks before rendering data

---

## 🖼️ Screenshots

*Add screenshots here for better presentation on GitHub (recommended)*

---

## 🔮 Future Improvements

* ⭐ Star‑based rating UI
* 🛒 Add to Cart functionality
* 🌐 Fetch live data from an API
* 📱 Fully responsive design
* 🧩 Reusable components

---

## 🙌 Acknowledgements

* Fake Store API (for sample product data)
* React Official Documentation
* Open‑source community

---

## 📄 License

This project is created for **learning purposes** and is free to use.

---

## 👨‍💻 Author

**Yugant**

If you like this project, feel free to ⭐ the repository!

Happy Coding 🚀
