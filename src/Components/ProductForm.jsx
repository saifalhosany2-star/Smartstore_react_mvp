
function ProductForm({ name, quantity, onNameChange, onQuantityChange, onAddProduct }) {
  return (
    <section>
      <h2>Add Product</h2>
      <form onSubmit={onAddProduct}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default ProductForm;
