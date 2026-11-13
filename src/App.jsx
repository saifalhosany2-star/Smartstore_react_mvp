
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

function cancelAddProduct() {
  setName("");
  setQuantity("");
}



function deleteProduct(id) {
  setProducts((prevProducts) =>
    prevProducts.filter((product) => product.id !== id)
  );
}

function updateProduct(id, newName, newQuantity) {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? { ...product, name: newName, quantity: newQuantity }
        : product
    )
  );
}

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

const totalProducts = products.length;

const totalQuantity = products.reduce(
  (sum, product) => sum + Number(product.quantity),
  0
);

const lowStockProducts = products.filter(
  (product) => Number(product.quantity) < 5
).length;

  return (
    <main>
      <h1>SmartStore Inventory Management</h1>

<section>
  <h2>Inventory Dashboard</h2>
  <p>Total Products: {totalProducts}</p>
  <p>Total Quantity: {totalQuantity}</p>
  <p>Low Stock Products: {lowStockProducts}</p>
</section>

      <ProductForm
        name={name}
        quantity={quantity}
        onNameChange={setName}
        onQuantityChange={setQuantity}
        onAddProduct={addProduct}
        onCancelAddProduct={cancelAddProduct}
      />

      <ProductList
        products={filteredProducts}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onDeleteProduct={deleteProduct}
        onSaveProduct={updateProduct}

      />
    </main>
  );
}

export default App;
