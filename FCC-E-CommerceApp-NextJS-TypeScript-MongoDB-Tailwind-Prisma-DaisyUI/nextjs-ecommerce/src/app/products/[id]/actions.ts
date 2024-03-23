"use server";

import { createCart, getCart } from "@/app/lib/db/cart";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
}
