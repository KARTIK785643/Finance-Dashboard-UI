# Finance Dashboard UI - FinTrack Lite

A clean and interactive finance dashboard built using React, designed to help users track their financial activity, understand spending patterns, and manage transactions efficiently.

---
# Deployment link
https://finance-dashboard-ui-rust.vercel.app/

##  Overview

FinTrack Lite is a frontend-focused dashboard application that provides users with a clear view of their financial data. The project emphasizes simplicity, usability, and structured UI design while simulating real-world dashboard behavior.

---

##  Features

###  Dashboard Overview

* Displays **Total Balance, Income, and Expenses**
* Visual representation using **Pie Chart (Spending Breakdown)**
* Highlights key financial insights

###  Transactions Management

* View all transactions with:

  * Date
  * Category
  * Amount
  * Type (Income / Expense)
* Search and filter transactions
* Edit existing transactions
*  Delete transactions
*  Add new transactions (Admin only)

###  Role-Based UI (Simulated RBAC)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add, edit, and delete transactions
* Role switching implemented using a dropdown

###  Insights Section

* Displays total spending
* Provides simple financial observations

---

##  State Management

The application uses **React Context API with useState** for managing global state.

* **Global State (Context)**

  * Transactions data
  * User role (Admin / Viewer)

* **Local State**

  * Search and filtering
  * Form handling

This approach ensures a clean and scalable structure without overcomplicating the application.

---

##  UI & Design Approach

* Clean and minimal UI design
* Consistent spacing and layout
* Modern color palette with soft shadows
* Responsive grid-based layout
* Focus on readability and user experience

---

##  Tech Stack

* **React (Vite)**
* **CSS (Custom Styling)**
* **Recharts (for data visualization)**

---

##  Responsiveness

* Layout adapts using CSS Grid
* Optimized for different screen sizes
* Scrollable table for smaller devices

---

##  Project Structure

```
src/
 ├── components/
 │    ├── SummaryCard
 │    ├── Charts
 │    ├── TransactionTable
 │    ├── AddTransaction
 │    ├── Insights
 │    └── RoleSwitcher
 │
 ├── context/
 │    └── FinanceContext
 │
 ├── data/
 │    └── mockData
 │
 ├── pages/
 │    └── Dashboard
```

---

## Setup Instructions

```bash
# Clone the repository
git clone <(https://github.com/KARTIK785643/Finance-Dashboard-UI.git)>

# Navigate to project
cd fintrack-lite

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## Key Design Decisions

* Used **Context API instead of Redux** to keep the solution lightweight
* Focused on **component modularity** for scalability
* Simulated **role-based access control on frontend**
* Prioritized **clarity over complexity**

---

##  Future Improvements

* Data persistence using localStorage or backend
* Authentication system
* Advanced analytics and filtering
* Dark mode support
* Export data (CSV/JSON)

---

##  Dveloped by

Kartik,
B.Tech CSE Student,
Passionate about frontend development and problem solving

---

## 📎 Note

This project is built as part of a frontend assignment to demonstrate UI design, state management, and component structuring skills.
