import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/SearchBar/Search";
import Categories from "./Components/Categories/Categories";
import Home from "./Pages/Home/Home";
import SingliProducts from "./Pages/SingliProducts/SingliProducts";
import Favoirite from "./Pages/Favoirite/Favoirite";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:productId" element={<SingliProducts />} />
        <Route path="/favoiriti" element={<Favoirite />} />
      </Routes>
    </div>
  );
}

export default App;
