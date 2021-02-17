import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  // items is the array coming from data
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // always filter from original list instead of the modified list
  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} />
          {/* pass in menuItems state value as a prop */}
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  )
}

export default App;
