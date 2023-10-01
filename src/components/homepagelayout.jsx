"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link
} from "@nextui-org/react";
import { useState } from "react";
export default function Homepagelayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState();
  return (
    <>
      <div>
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p> SHIVA </p>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex ">
              <NavbarItem>
                <p> PROJECTS </p>
              </NavbarItem>

              <NavbarItem>
                <p> WORK EXPERIENCE </p>
              </NavbarItem>

              <NavbarItem>
                <p> BLOGS </p>
              </NavbarItem>
            </NavbarContent>

            <NavbarItem>
              <Button
                className="capitalize"
                href="https://www.linkedin.com/in/siva-baram-1269261aa/"
                as={Link}
                variant="bordered"
              >
                get in touch
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="flex flex-col gap-3 h-screen justify-evenly items-center">
            <NavbarMenuItem>
              <p> PROJECTS </p>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <p> WORK EXPERIENCE </p>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <p> BLOGS </p>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <p> PROJECTS </p>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
        {children}
      </div>
    </>
  );
}
