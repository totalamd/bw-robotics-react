import { useState } from 'react';
import "./styles.css";
import menuIcon from "./img/menu-black-48.png";

export default function Menu() {
  const [showMenu, setMenu] = useState(false);
  const menuItemsArray = ['Item 1', 'Item 2', 'Item 3'];  // should be passed as Props with URLs
  let menuItems = menuItemsArray.map(item => <div className="Menu__Item" key={item}>{item}</div>);

  function handleClick() {
    setMenu(status => !status);
  }

  return (
    <div className="Menu">
      <div className="Menu__Start" onClick={handleClick}></div>
      {showMenu && <div className="Menu__DropDown">{menuItems}</div>}
    </div> // need to catch mouseclicks out of menu to close
  );
}
