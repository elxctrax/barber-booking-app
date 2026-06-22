import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#3b82f6] px-6 py-4 text-[#ffffff]">
      <Link href="/" className="text-xl font-bold md:text-green-500">
        Barber Booking
      </Link>

      <div className="hidden items-center md:flex"> //desktop navbar
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/signup">Sign Up</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center md:hidden"> //mobile navbar
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Barber Booking</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="/services">Services</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about">About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/signin">Sign In</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/signup">Sign Up</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
