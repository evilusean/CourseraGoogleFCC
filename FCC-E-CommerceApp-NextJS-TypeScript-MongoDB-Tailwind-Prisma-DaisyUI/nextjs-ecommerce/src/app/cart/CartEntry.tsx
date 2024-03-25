"use client";

import Image from "next/image";
import { CartItemithProduct } from "../lib/db/cart";
import Link from "next/link";

interface CartEntryProps {
  cartItem: CartItemithProduct;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.id} className="font-bold">
            {product.name}
          </Link>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
