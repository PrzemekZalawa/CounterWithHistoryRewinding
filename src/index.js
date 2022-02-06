import ReactDOM from 'react-dom';
import './index.css';

import react from 'react';
import reactDom from 'react-dom';
import React, { useState } from 'react';


//Przemek Zaława 
function  List(){
  let [Groceries, setGroceries] = useState([
    {name: "cebularz", price: 2.79},
    {name: "croissant", price: 2.99}
  ]);
  
  let [ShoppingCart, setShoppingCart] =useState([])

  const addToCart = (price,name) => {
    let newArray = [...ShoppingCart]
    newArray[newArray.length]= {  
    name: name,
    price: price
    }
    setShoppingCart(newArray);
    
  }
  let amountOfProducts = 0
  let howMuchToPay = 0
  ShoppingCart.map((element, i) =>(
    amountOfProducts++,
    howMuchToPay+=element.price
  ));
  let ListOfGroceries = Groceries.map((element, i) =>(
    <li key={element+i}>
      {element.name}:  {element.price} zł  
      <button onClick={()=> addToCart(element.price,element.name) }>Dodaj</button>
    </li>
  ));

  let ListOfShoppings = ShoppingCart.map((element, i) =>(
    <li key={element+i}>
      {element.name}:  {element.price} zł  
    </li>
  ));

  const addProduct = (event) => {
    event.preventDefault();

    let newArray = [...Groceries]
    newArray[newArray.length]= {  
    name: event.target.name.value,
    price:  parseInt(event.target.price.value)
    }
    setGroceries(newArray);
  }

  return(
    <div>
    <h1>Przemek Zaława 3F</h1>
    <h3>Dodawanie produktów</h3>
    <form onSubmit={addProduct}>
      nazwa:<input type="text" name="name"></input>
      <br/>
      cena:<input type="number" name="price" step="0.01"></input>
      <br/>
      <input type="submit" value="Dodaj"/>
    </form>
    <h3>Lista produktów</h3>
    <ul>{ListOfGroceries}</ul>
    <h3>Koszyk</h3>
    <p>Ilosc produktów: {amountOfProducts}</p>
    <p>Ilosc produktów: {howMuchToPay} zł</p>
    <ul>{ListOfShoppings}</ul>
    </div>
  )
}
reactDom.render(<List/>,document.getElementById('root'))