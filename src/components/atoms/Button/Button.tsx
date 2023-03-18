/* eslint-disable react/button-has-type */
import clsx from "clsx";

export default function Button({
  type,
  children,
  className,
  disabled,
  id,
  onClick,
  ref,
  title,
  variant,
  size
}: ButtonProps) {
  /**
   * get button type
   * @returns <string> `className`
   */
  function getButtonVariant(): string {
    switch (variant) {
      case "outline-default":
        return clsx("btn btn-outline-default");

      default:
        return clsx("btn btn-default");
    }
  }

  /**
   * get button size
   * @returns <string> `className`
   */
  function getButtonSize(): string {
    switch (size) {
      case "sm":
        return clsx("py-2 px-3", "text-xs");

      case "lg":
        return clsx("py-4 px-5");

      default:
        return clsx("py-3 px-4", "text-sm");
    }
  }

  return (
    <button
      type={`${type || "button"}`}
      className={clsx(getButtonVariant(), getButtonSize(), className)}
      onClick={onClick}
      title={title}
      id={id}
      disabled={disabled}
      aria-disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  );
}
