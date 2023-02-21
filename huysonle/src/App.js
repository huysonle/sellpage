import "./App.css";
import Information from "./components/header/Information";
import Logo from "./components/header/Logo";
import Navbar from "./components/header/Navbar";
import Product from "./component-product/Product";
import Picture from "./components/body/Picture";
import Picture2 from "./components/body/Picture2";
import Navbar2 from "./components/header/Navbar2";
import Product2 from "./component-product/Product2";
import Navbar3 from "./components/header/Navbar3";
import Product3 from "./component-product/Product3";

function App() {
  return (
    <div className="App">
      <Information></Information>
      <Logo></Logo>
      <Picture></Picture>
      <Navbar></Navbar>
      <div className="products">
        <div className="products-list">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className="products-list">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
      <Picture2></Picture2>
      <Navbar2></Navbar2>
      <div className="products-2">
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
        <Product2></Product2>
      </div>
      <Navbar3></Navbar3>
      <div>
        <Product3></Product3>
      </div>
    </div>
  );
}

export default App;
