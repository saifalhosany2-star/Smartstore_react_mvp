function ProductList({ products, searchTerm, onSearchTermChange, onDeleteProduct }) {
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
