import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/SearchBar/Search';
import Categories from './Components/Categories/Categories';
import Home from './Pages/Home/Home';
import Product from './Pages/Products/Product';
import SingliProducts from './Pages/SingliProducts/SingliProducts';


function App() {
  return (
    <div className="App">
      <Header/>
        <Search/>
        <Categories/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts/:productId' element={<SingliProducts/>}/>
        </Routes>

    </div>
  );
}

export default App;
