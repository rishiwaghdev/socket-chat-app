# 🚀 Creative WebSocket Chat App

A modern, real-time chat application built using **Node.js, Express, and Socket.IO** with a unique and creative UI.

---

## ✨ Features

* 💬 Real-time messaging using WebSockets
* ✔ Single tick (message sent)
* ✔✔ Blue tick (message seen by receiver)
* ⌨️ Live typing indicator (per user)
* 💫 Smooth bubble animations (WhatsApp-style)
* 🧊 Glassmorphism modern UI
* ⚡ Lightweight and fast (no frameworks)

---


https://github.com/user-attachments/assets/8272cd1a-1792-4e93-b4ff-5d298a6e69b8


## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **Socket.IO**
* **Vanilla JavaScript (Frontend)**
* **HTML + CSS (Glass UI)**

---

## 📂 Project Structure

```
socket-chat-app/
│── public/
│   └── index.html
│── index.js
│── package.json
│── pnpm-lock.yaml
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/rishiwaghdev/socket-chat-app.git
cd socket-chat-app
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the server

```bash
pnpm run dev
```

### 4. Open in browser

```
http://localhost:9000
```

---

## 🔄 How It Works

* Each message is assigned a **unique ID**
* Sender gets ✔ (sent)
* Receiver emits a **"seen" event**
* Sender updates UI → ✔✔ (blue tick)
* Typing events are handled using:

  * `typing`
  * `stop-typing`

---

## 🙌 Author

**Rushikesh Wagh**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
