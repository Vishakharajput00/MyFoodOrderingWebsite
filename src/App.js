import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import Cardvalue from "./components/Cardvalue";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        backgroundImage: ` url(
        "https://wallpaperaccess.com/full/6602399.jpg"
      )`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Cardvalue />} />
        <Route path="/item_details/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
