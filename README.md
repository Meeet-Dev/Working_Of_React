# React Element Creation Using CDN

This project demonstrates how I initially wrote a simple element using **Vanilla JavaScript** and later converted the same functionality into **ReactJS** using `React.createElement()` — all without using any build tools like Webpack or npm.

Instead, I used **CDN links** to include both React and ReactDOM directly in the HTML file.

---

## What I Did

- ✅ Created a simple HTML file with a root `<div>`.
- ✅ Used **Vanilla JS** to create and append an `h1` element.
- ✅ Rewrote the same functionality using **React's `createElement()`** method.
- ✅ Used `ReactDOM.createRoot()` to render the React element into the DOM.
- ✅ Imported React and ReactDOM via **CDN links** from [UNPKG](https://unpkg.com/).

---

## Why Use CDN?

**CDN (Content Delivery Network)** is a globally distributed network of servers that deliver static content (like JavaScript libraries) quickly and efficiently.

---

# 🌐 Understanding `crossorigin` in Script Tags

---

## 🔐 What is `crossorigin`?

The `crossorigin` attribute in your `<script>` tag is related to **CORS** — **Cross-Origin Resource Sharing**.

It tells the browser how to handle **resources loaded from a different origin** (domain), such as a **CDN (Content Delivery Network)**.

---

## 📦 Why It Matters

When you load scripts or resources from another domain (like `unpkg.com` or `cdnjs.cloudflare.com`), the browser has to make decisions about **security and access**.

This is especially important when your project interacts with:

- 🔄 **Fetch requests**
- 🖼️ **Canvas APIs**
- 🛡️ **Security policies**
- 🧪 **Error tracking and stack traces**

---

## 🧪 Example with React CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


Using a CDN:
- ⚡ Makes the app faster by loading libraries from the nearest server.
- 🛠️ Eliminates the need to install packages locally.
- 🧪 Is perfect for quick demos, testing, or learning setups.

