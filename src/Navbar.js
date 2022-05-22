import "./styles.css";

import Menu from "./Menu";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <Menu />
      <div className="Navbar__Title">{ props.mode } - {props.title}</div>
      <div className="Navbar__Logo" />
    </div>
  );
}