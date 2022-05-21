import { useState } from 'react';
import "./styles.css";

import Main from "./Main";
import Navbar from "./Navbar";

export default function App() {
  const [companyName, setCompanyName] = useState("O'coffee Brazil"); // get this from the server
  const [modeName, setModeName] = useState("Vehicles"); // get this from the server

  return (
    <div className="App">
      <Navbar title={companyName} mode={modeName} />
      <Main />
    </div>
  );
}
