import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Menu = ({ items, orderList, SetOrderList }) => {
  
const ekleme = (title, price)=> {
  SetOrderList([...orderList, {title, price}])
   console.log(orderList)
}
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₺{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <br/>
            <Button onClick={()=> ekleme(title, price)}> Siparise Ekle </Button>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
