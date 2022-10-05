import React, { useState } from "react";
import { Link } from "react-router-dom";

const Snack = ({snack, price}) => {
  const [purchased, setPurchased] = useState(0)
  const buy = () => {
    setPurchased(count => count + 1)
  }
  return (
    <div>
      <h1>{snack}</h1>
      <h2>${price}</h2>
      <h2>{snack} purchased: {purchased}</h2>
      <button onClick={buy}>Buy!</button>
      <br/><br/>
      <button><Link to="/">Go Back</Link></button>
    </div>
  )
}

export default Snack