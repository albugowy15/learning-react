import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (<div>
    <span className="font-bold py-3">AppName</span>
    <ul>
      <li>
        <Link to="/" onClick={props.closeMenu} className="text-blue-500 py-3 border-t border-b block">Home</Link>
      </li>
      <li>
        <Link to="/about"
          onClick={props.closeMenu} className="text-blue-500 py-3 border-b block">About</Link>
      </li>
      <li>
        <Link to="/contact"
          onClick={props.closeMenu} className="text-blue-500 py-3 border-b block">Contact</Link>
      </li>
    </ul>
  </div>)
}

export default NavigationMenu