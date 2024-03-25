"use client";

import Image from "next/image";
import { CartItemithProduct } from "../lib/db/cart";

interface CartEntryProps {
  cartItem: CartItemithProduct;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  return (
    <div>
      <div className="fkex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="divider" />
    </div>
  );
}
