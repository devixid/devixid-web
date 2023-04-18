/* eslint-disable no-unused-vars */
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

declare global {
  type ButtonProps = Pick<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "title" | "id" | "disabled" | "ref" | "onClick" | "className" | "children" | "type"
  > & {
    /**
     * Button variant
     */
    variant?: "outline-default" | "default";
    /**
     * Button size
     */
    size?: "sm" | "base" | "lg";
  };
}

export global {}
