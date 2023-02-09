import "./App.css";
import Information from "./components/header/Information";
import Logo from "./components/header/Logo";
import Navbar from "./components/header/Navbar";
import Product from "./component-product/Product";

function App() {
  return (
    <div className="App">
      <Information></Information>
      <Logo></Logo>
      <Navbar></Navbar>
      <Product></Product>
      </div>
  );
}

export default App;
