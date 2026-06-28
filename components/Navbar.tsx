import Link from "next/link"
import { Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"

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
import VerticalSeparator from "./VerticalSeparator"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#dee2e6] px-6 py-4 text-[#ffffff] [padding:16px_24px]">
      <Link href="/" className="text-xl font-bold">
        Barber Booking (insert logo)
      </Link>

      <div className="hidden items-center md:flex"> {/*desktop navbar */} 
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#services" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#hours-location" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Hours</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#about" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/booking" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Book Now</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center md:hidden"> {/*mobile navbar */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Barber Booking</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="#services" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Services</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#hours-location" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Hours</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#about" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/booking" className="rounded-md text-sm font-semibold text-white hover:bg-[#adb5bd] transition-colors [padding:12px_24px]">Book Now</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
