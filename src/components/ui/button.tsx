import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl text-base font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-red/20 dark:aria-invalid:ring-red/40 aria-invalid:border-red cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-hover",
        secondary:
          "bg-secondary text-foreground hover:bg-yellow",
        link: "text-primary text-primary-hover",
      },
       size: {
        default: "px-6 py-3",
        sm: "px-3 py-1.5 gap-1.5 text-sm",
        lg: "px-10 py-4",
        icon: "size-10",
        link: "p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
