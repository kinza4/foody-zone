# 🍔 Foody Zone

Foody Zone is a responsive food browsing web application built with **React**. It allows users to explore different food items, search for dishes, and filter food by categories through a clean and responsive user interface.

The project also includes a separate backend server that provides the food data and images used by the frontend.

## ✨ Features

* 🍽️ Browse different food items
* 🔍 Search food by name
* 🥞 Filter food by categories such as Breakfast, Lunch, and Dinner
* 📱 Responsive design for desktop, tablet, and mobile screens
* 🖼️ Food cards with images, descriptions, and prices
* ⚡ Dynamic filtering without page reload
* 🔄 Data management using React Context API
* 🌐 Separate frontend and backend structure

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Context API
* Vite

### Backend

* Node.js
* TypeScript

## 📁 Project Structure

```text
foody-zone/
│
├── app/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Card.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── NavbarComp.jsx
│   │   ├── context/
│   │   │   └── DataContext.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Backend
    ├── public/
    │   └── images/
    ├── src/
    │   └── index.ts
    ├── package.json
    └── tsconfig.json
```

## 🔎 Search Functionality

Users can search for food items by entering the name of a dish in the search field.

The application filters the available food data dynamically and displays only matching items.

For example:

```text
Search: "burger"

Result:
🍔 Burger
```

## 🍽️ Category Filtering

Food items can also be filtered using category buttons.

Users can select categories such as:

* All
* Breakfast
* Lunch
* Dinner

Selecting **All** displays the complete food collection again.

## 🧠 State Management

The application uses React's **Context API** to manage food data across components.

The original food data and filtered data are maintained separately so searching and category filtering do not modify the original dataset.

## 📱 Responsive Design

Foody Zone is designed to work across different screen sizes.

The food grid automatically adapts between:

```text
Desktop → 3 columns
Tablet  → 2 columns
Mobile  → 1 column
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/kinza4/foody-zone.git
```

Move into the project:

```bash
cd foody-zone
```

### Run the Backend

```bash
cd server
npm install
npm run dev
```

### Run the Frontend

Open another terminal:

```bash
cd app
npm install
npm run dev
```

Then open the local URL provided by Vite in your browser.

## 🎯 What I Practiced

While building Foody Zone, I practiced:

* React components
* React Hooks
* Context API
* Array `filter()` and `map()`
* Search functionality
* Category-based filtering
* Responsive layouts
* Tailwind CSS
* Working with frontend and backend data
* Organizing a React project into reusable components

## 👩‍💻 Author

**Kinza Munir**

GitHub: @kinza4

---

⭐ If you like this project, feel free to star the repository!
