export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form>
        <input
          required
          name="name"
          placeholder="Product Name"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Product Description"
          className="mb-3 w-full textarea textarea-bordered"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="mb-3 w-full input input-bordered"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input input-bordered"
        />
      </form>
    </div>
  );
}
