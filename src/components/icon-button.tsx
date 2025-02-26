import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface IconButtonProps extends ComponentProps<"button"> {}

export default function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900",
        className
      )}
      {...props}
    />
  )
}
