# Delivery Exception Management Dashboard

A simple internal web dashboard built using **HTML, CSS, and JavaScript** to log, track, and manage delivery exceptions for operations teams.

This project is created as a **frontend practice assignment** focusing on **pure DOM manipulation** without using any frameworks, libraries, or backend services.

---

## 📌 Problem Statement

Delivery exceptions (such as address issues, customer unavailability, or damaged packages) are often reported informally, leading to poor tracking and delayed resolution.

This dashboard helps operations managers:
- Record delivery issues
- View all reported exceptions
- Filter issues by type and status
- Resolve or delete issues efficiently

---

## 🛠️ Tech Stack

- **HTML** – Structure and layout  
- **CSS** – Styling and dashboard UI (no frameworks)  
- **JavaScript** – Basic DOM manipulation and event handling  

❌ No frameworks  
❌ No backend  
❌ No external libraries  
❌ No localStorage or APIs  

---

## 📂 Project Structure

delivery-exception-dashboard/
│
├── index.html # Main UI and structure
├── style.css # Styling (pure CSS)
└── script.js # JavaScript logic


---

## ✨ Features

- Report delivery exceptions using a form
- Dynamic table update without page reload
- Default issue status set to **Open**
- Resolve issues (status changes to **Resolved**)
- Delete issues with confirmation prompt
- Filter issues by:
  - Issue Type
  - Status (Open / Resolved)
- Visual indicators:
  - High priority issues highlighted
  - Resolved issues visually marked

---

## ⚙️ How It Works

1. User fills out the delivery exception form
2. On submit:
   - Page does not reload
   - Data is validated
   - A new row is added to the table dynamically
3. Each table row provides:
   - **Resolve** button to mark issue as resolved
   - **Delete** button to remove the issue
4. Filters show/hide rows using DOM manipulation (data is not removed from memory)

---

## 🚀 How to Run the Project

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/delivery-exception-dashboard.git
Open the project folder

Open index.html in your browser
(or use IntelliJ Live Preview / LiveEdit)

🎯 Learning Outcomes
Writing clean, semantic HTML

Building layouts using pure CSS

Handling forms and events in JavaScript

Dynamic DOM manipulation

Implementing filters and UI state changes

Following real-world frontend constraints


📄 License
This project is for educational and practice purposes only.
