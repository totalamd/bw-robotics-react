import { useState } from 'react';
import "./styles.css";

export default function Menu() {
  const [showMenu, setMenu] = useState(false);
  const menuItemsArray = ['Item 1', 'Item 2', 'Item 3'];  // should be passed as Props with URLs
  let menuItems = menuItemsArray.map(item => <div className="Menu__Item" key={item}>{item}</div>);

  function handleClick() {
    setMenu(!showMenu);
  }

  return (
    <div className="Menu" onClick={handleClick}>
      [M]
      {showMenu && <div className="Menu__DropDown">{menuItems}</div>}
    </div> // need to catch mouseclicks out of menu to close
  );
}
