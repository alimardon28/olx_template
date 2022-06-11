import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/SearchBar/Search';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Header/>
        <Search/>
        <Categories/>
    </div>
  );
}

export default App;
