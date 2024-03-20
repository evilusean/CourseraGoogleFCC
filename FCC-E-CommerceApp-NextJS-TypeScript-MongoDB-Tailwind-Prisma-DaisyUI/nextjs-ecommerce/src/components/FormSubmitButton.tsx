"use client";

import { ComponentProps } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
}: FormSubmitButtonProps) {
  return <button type="submit">{children}</button>;
}
