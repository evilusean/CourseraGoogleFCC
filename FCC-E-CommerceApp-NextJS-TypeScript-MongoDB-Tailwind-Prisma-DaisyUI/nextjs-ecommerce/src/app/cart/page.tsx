export const metadata = {
  title: 'Your Shopping Cart',
  description: 'This is the shopping cart page.',
};


export default async function CartPage() {

    const cart = await getCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart?.items.map(cartItem => (
        
      ))}
    </div>
  );
}
