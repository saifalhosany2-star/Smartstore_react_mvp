
import { useState } from "react";
import "./App.css";
import ProductForm from "./Components/ProductForm.jsx";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

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


      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} — Quantity: {product.quantity}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
