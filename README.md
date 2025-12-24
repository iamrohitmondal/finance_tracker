# 💰 Smart Finance Manager

A high-performance personal finance dashboard built with **React** and **Redux Toolkit**. This project demonstrates enterprise-level state management, data persistence, and responsive UI design.



## 🛠️ Tech Stack
* **Frontend:** React (Vite)
* **State Management:** Redux Toolkit (Slices & Memoized Selectors)
* **Styling:** Tailwind CSS (Mobile-first design)
* **Icons:** Lucide-React
* **Data Persistence:** Web Storage API (LocalStorage)

## ✨ Key Features
* **Dual-Stream Tracking:** Separate, dedicated modules for Income and Expense management.
* **Live Analytics:** Real-time calculation of Total Balance and Cash Flow using memoized selectors.
* **Full CRUD Operations:** Capability to Add, Read, Update, and Delete transactions with instant UI synchronization.
* **Data Persistence:** Integrated middleware logic to persist state across browser sessions via `localStorage`.
* **Smart Validation:** Built-in business logic to prevent expenses from exceeding the available balance.



## 🏗️ Architectural Highlights
* **Performance:** Implemented **Memoization** using `createSelector` to optimize re-renders and computation.
* **Clean Code:** Follows **DRY** (Don't Repeat Yourself) principles with reusable presentational components like `TransactionRow`.
* **Defensive Design:** Employs Optional Chaining and Nullish Coalescing to handle stale data and schema migrations safely.



## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/iamrohitmondal/finance_tracker.git](https://github.com/iamrohitmondal/finance_tracker.git)
