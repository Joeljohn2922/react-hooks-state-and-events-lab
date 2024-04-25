import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart]=useState(false)

  function handleAddToCart() { 
    setInCart(!inCart)
  }
  console.log(inCart)

  return (
    <li className= {inCart ? "in-cart" : ""}> 
    {/* name of this expression is call ternary */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {inCart ? "remove" : "add"} onClick = {handleAddToCart}>{inCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
