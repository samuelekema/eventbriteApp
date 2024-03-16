import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/About';
import Devices from './Components/devices';
import Product from './Components/product';
import Card from './Components/card';
import FAQ from './Components/FAQ';
import Resources from './Components/resources';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Devices/>
      <Product/>
      <Card/>
      <FAQ/>
      <Resources/>
    </div>
  );
}

export default App;
