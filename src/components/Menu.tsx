import React from "react";
import { ActiveLink } from "./Link";

interface MenuProps {
  isOpen: boolean;
  toggle: () => unknown;
}

export const Menu = ({ isOpen, toggle }: MenuProps) => {
  return (
    <nav className={isOpen ? "is-open" : ""}>
      <ActiveLink href="/">01. Home.</ActiveLink>

      <ActiveLink href="/about">02. About.</ActiveLink>

      <ActiveLink href="/projects">03. Projects.</ActiveLink>

      <ActiveLink href="/contact">04. Contact.</ActiveLink>

      <div
        className="header-nav-close"
        onClick={toggle}
      />
    </nav>
  );
};

export default Menu;
