
function ProductForm({ name, quantity, onNameChange, onQuantityChange, onAddProduct, onCancelAddProduct }) {
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
          min="0"
          required
        />
        <button type="submit">Add Product</button>
        
<button
  type="button"
  onClick={onCancelAddProduct}
>
  Cancel
</button>

      </form>
    </section>
  );
}

export default ProductForm;
