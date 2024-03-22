interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
}
