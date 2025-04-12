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

Using a CDN:
- ⚡ Makes the app faster by loading libraries from the nearest server.
- 🛠️ Eliminates the need to install packages locally.
- 🧪 Is perfect for quick demos, testing, or learning setups.

