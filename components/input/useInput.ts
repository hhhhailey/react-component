import React from "react";
import { InputProps } from "./Input";

export type InputMessageTypeUnion = "info" | "pass" | "error" | null;

export default function useInput({ error }: InputProps) {
  const [message, setMessage] = React.useState<InputMessageTypeUnion>(null);

  return { message };
}
