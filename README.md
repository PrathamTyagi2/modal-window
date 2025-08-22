# 🪟 Modal Window

A simple project to practice **DOM manipulation** and **event handling** using **HTML, CSS, and JavaScript**. It demonstrates how to open and close a modal dialog with buttons, overlay clicks, and keyboard events.

---

## 🎮 Overview

The **Modal Window project** is a beginner‑friendly exercise to learn:

* Selecting elements from the DOM
* Adding and removing CSS classes
* Handling events like `click` and `keydown`
* Improving user experience with overlays and keyboard shortcuts

This project is commonly built as part of JavaScript learning (e.g., Jonas Schmedtmann’s course).

---

## ✨ Features

* Multiple **Open Modal** buttons
* **Close button (×)** inside the modal
* **Overlay click** to close the modal
* **Escape key (Esc)** to close modal via keyboard
* Smooth transition effects with CSS

---

## 🧰 Tech Stack

* **HTML5** for structure
* **CSS3** for styling & animations
* **JavaScript (ES6+)** for DOM logic & interactivity

---

## 📦 Getting Started

### 1) Clone or download

```bash
git clone https://github.com/<your-username>/modal-window.git
cd modal-window
```

### 2) Open in a browser

Just open `index.html` in your favorite browser or use VS Code Live Server.

---

## 🕹️ How to Use

1. Open the page in your browser.
2. Click any **Show Modal** button → Modal appears.
3. Close the modal by:

   * Clicking the **×** button
   * Clicking outside on the **overlay**
   * Pressing the **Escape** key

---

## 📁 Folder Structure

```
modal-window/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
└─ README.md
```

---

## 🧪 Key Concepts Demonstrated

* DOM element selection (`querySelector`, `querySelectorAll`)
* Event listeners for multiple elements
* CSS class toggling (`classList.add`, `classList.remove`, `classList.toggle`)
* Keyboard event handling (`keydown`)
* Overlay click detection

---

## 🛠️ Scripts / Commands (Optional)

```json
// package.json (optional)
{
  "name": "modal-window",
  "version": "1.0.0",
  "scripts": {
    "serve": "live-server ."
  }
}
```

---

## 🧭 Roadmap

* [ ] Add opening/closing animations
* [ ] Make modal draggable
* [ ] Add form inside modal (e.g., login/register)
* [ ] Improve mobile responsiveness
* [ ] Multiple modals support

---

## 🐞 Troubleshooting

* **Modal doesn’t show up?** → Check if your selectors match the class names in HTML.
* **Close button not working?** → Verify event listener and that the button has correct class.
* **Escape key not closing?** → Ensure `event.key === 'Escape'` check is correct.

---

## 🖼️ Screenshots


https://github.com/user-attachments/assets/71541258-965f-4c50-91ed-3d417e01dee2




---

## 🤝 Contributing

PRs welcome. For major changes, open an issue to discuss what you’d like to improve.

---

## 📄 License

This project is licensed under the **MIT License** — free to use and modify.

---

## 🙌 Acknowledgements

* Inspired by common UI patterns used across modern web apps
* Thanks to open‑source tutorials and courses for the idea
