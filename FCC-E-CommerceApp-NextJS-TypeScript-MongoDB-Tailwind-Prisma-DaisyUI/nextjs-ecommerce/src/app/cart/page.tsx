import { getCart } from "../lib/db/cart";
import { formatPrice } from "../lib/format";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
  title: "Your Shopping Cart",
  description: "This is the shopping cart page.",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div>
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}
