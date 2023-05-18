import "./App.css";
import ProductShop from "./filter/productsShop";

function App() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="App">
        <header className="App-header">
          <ProductShop />
        </header>
      </div>
    </>
  );
}

export default App;
