import { ShoppingCart } from "../lib/db/cart";

interface ShoppingCartButtonProps {
  cart: ShoppingCart;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return <div className="dropdown dropdown-end"></div>;
}
