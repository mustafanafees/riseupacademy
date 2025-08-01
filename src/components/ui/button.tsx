import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-light text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-lg hover:shadow-destructive/25 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-border bg-background hover:bg-card-hover hover:border-primary/50 hover:shadow-md transition-all duration-300",
        secondary:
          "bg-gradient-to-r from-secondary to-muted text-secondary-foreground hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        ghost: "hover:bg-card-hover hover:shadow-sm transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-light transition-colors duration-300",
        accent: "bg-gradient-to-r from-accent to-accent-light text-accent-foreground hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0",
        glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-foreground hover:bg-white/20 hover:shadow-lg transition-all duration-300",
        glow: "bg-gradient-to-r from-primary to-primary-light text-primary-foreground hover:shadow-lg hover:shadow-primary/50 animate-pulse-glow",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-xl px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
