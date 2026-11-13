import {useState} from "react";
function ProductList({ products, searchTerm, onSearchTermChange, onDeleteProduct, onSaveProduct }) {
  
const [editingId, setEditingId] = useState(null);
const [editName, setEditName] = useState("");
const [editQuantity, setEditQuantity] = useState("");

function startEditing(product) {
  setEditingId(product.id);
  setEditName(product.name);
  setEditQuantity(String(product.quantity));
}

function cancelEditing() {
  setEditingId(null);
  setEditName("");
  setEditQuantity("");
}

function saveEditing() {
  const newName = editName.trim();
  const newQuantity = Number(editQuantity);

  if (
    !newName ||
    editQuantity.trim() === "" ||
    !Number.isInteger(newQuantity) ||
    newQuantity < 0
  ) {
    alert("Please enter a valid name and quantity.");
    return;
  }

  onSaveProduct(editingId, newName, newQuantity);
  cancelEditing();
}

    const hasProducts = products.length > 0;

  return (
    <section>
      <h2>Product List</h2>

      <label htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />

      {!hasProducts ? (
        <p>
          {searchTerm.trim()
            ? "No matching products found."
            : "No products added yet."}
        </p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} — Quantity: {product.quantity}
   
{Number(product.quantity) < 5 && (
  <strong> — Low Stock</strong>
)}

{editingId === product.id && (
  <div>
    <label>Name:</label>
    <input
      type="text"
      value={editName}
      onChange={(e) => setEditName(e.target.value)}
    />

    <label>Quantity:</label>
    <input
      type="number"
      min="0"
      step="1"
      value={editQuantity}
      onChange={(e) => setEditQuantity(e.target.value)}
    />
 
<button type="button" onClick={saveEditing}>
  Save
</button>

<button type="button" onClick={cancelEditing}>
  Cancel
</button>

  </div>
)}

<button
  type="button"
  onClick={() => startEditing(product)}
>
  Edit
</button>
           
<button
  type="button"
  onClick={() => onDeleteProduct(product.id)}
>

  Delete
</button>

            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;
