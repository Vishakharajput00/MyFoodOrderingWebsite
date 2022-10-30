import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import Cardvalue from "./components/Cardvalue";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cardvalue />} />
        <Route path="/item_details/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
