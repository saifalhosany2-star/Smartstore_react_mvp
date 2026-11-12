
import { useState } from "react";
import "./App.css";
import ProductForm from "./Components/ProductForm.jsx";
import ProductList from "./Components/ProductList.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(e) {
    e.preventDefault();

    if (!name.trim() || quantity === "" || Number(quantity) < 0) {
      return;
    }

    const product = {
      id: Date.now(),
      name: name.trim(),
      quantity: Number(quantity),
    };

    setProducts([...products, product]);
    setName("");
    setQuantity("");
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <main>
      <h1>SmartStore Inventory Management</h1>

      <ProductForm
        name={name}
        quantity={quantity}
        onNameChange={setName}
        onQuantityChange={setQuantity}
        onAddProduct={addProduct}
      />

      <ProductList
        products={filteredProducts}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
    </main>
  );
}

export default App;
