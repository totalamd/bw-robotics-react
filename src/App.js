import { useState } from 'react';
import "./styles.css";

import Main from "./Main";
import Navbar from "./Navbar";

export default function App() {
  const [customer, setCustomer] = useState({  // get this from the server
    customerId: 123,
    name: "O'coffee Brazil",
    dataUrl: "http://127.0.0.1:8080"
  });
  const [mode, setMode] = useState({ type: "vehicles", name: "Vehicles" });  // different Views

  return (
    <div className="App">
      <Navbar title={customer.name} mode={mode.name} />
      <Main mode={mode.type} dataSource={customer.dataUrl} />
    </div>
  );
}
