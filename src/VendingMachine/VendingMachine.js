import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

const VendingMachine = () => {
  return (
    <div className="VM-machine">
      <div className="VM-title"><h1>Vending Machine</h1></div>
      <div className="VM-item">
        <Link to="/candy" className="VM-link">Candy</Link>
      </div>
      <div className="VM-item">
        <Link to="/gum" className="VM-link">Gum</Link>
      </div>
      <div className="VM-item">
        <Link to="/chips" className="VM-link">Chips</Link>
      </div>
      <div className="VM-item">
        <Link to="/soda" className="VM-link">Soda</Link>
      </div>
      <div className="VM-dispense"></div>
    </div >
  )
}

export default VendingMachine
