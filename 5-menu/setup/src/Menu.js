import React from 'react';

const Menu = ({ items }) => {
  return <div className="section-center">
    {items.map((menuItem) => {
      const { id, title, img, desc, price } = menuItem;
      return <article key={id} className="menu-item">
        <img className="photo" src={img} alt={title} />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4>{price}</h4>
          </header>
        </div>
      </article>
    })}
  </div>;
};

export default Menu;
