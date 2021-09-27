import "./App.css";
import React, { useState } from "react";
import items from "./data";
import { Categories } from "./components/Categories";
import Menu from "./components/Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const flterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="undeline"></div>
        </div>
        <Categories filter={flterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
