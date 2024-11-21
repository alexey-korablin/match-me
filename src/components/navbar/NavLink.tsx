"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathName = usePathname();
  const isNavbarActive = href === pathName;

  return (
    <NavbarItem
      className="text-xl text-white uppercase data-[active=true]:text-yellow-200"
      isActive={isNavbarActive}
      as={Link}
      href={href}
    >
      {label}
    </NavbarItem>
  );
};

export default NavLink;
