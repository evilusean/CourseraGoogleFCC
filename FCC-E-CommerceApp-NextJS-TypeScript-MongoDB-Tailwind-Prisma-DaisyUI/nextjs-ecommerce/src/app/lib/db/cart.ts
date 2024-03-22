import { cookies } from "next/headers";
import prisma from "./prisma";
import { Cart } from "@prisma/client";

export type ShoppingCart = Cart & {
  size: number;
  subtotal: number;
};

export async function getCart() {
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: {
          id: localCartId,
        },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  } else
    return {
      ...cart,
      size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: cart.items.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0,
      ),
    };
}

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  cookies().set("localCartId", newCart.id);
}
