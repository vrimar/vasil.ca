import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <header>
      <Link
        legacyBehavior
        href="/"
      >
        <div className="header-logo">
          <span className="accent-color">vasil </span>
          rimar
          <span className="accent-color">.</span>
        </div>
      </Link>

      <Menu
        isOpen={isMenuOpen}
        toggle={handleMenuToggle}
      />

      <div
        className="header-menu-toggle"
        onClick={handleMenuToggle}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 294.843 294.843"
        >
          <g>
            <path
              d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331
              c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12
              s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6
              c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"
            />
            <path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z" />
            <path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z" />
            <path
              d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473
              C213.971,216.658,216.658,213.971,216.658,210.658z"
            />
          </g>
        </svg>
      </div>
    </header>
  );
};
