import ActiveLink from './Link';

function Menu({ isOpen, toggleMenu }) {
  return <nav className={isOpen ? 'is-open' : ''}>
    <ActiveLink href="/">
      <a>01. Home.</a>
    </ActiveLink>

    <ActiveLink href="/about">
      <a>02. About.</a>
    </ActiveLink>

    <ActiveLink href="/projects">
      <a>03. Projects.</a>
    </ActiveLink>

    <ActiveLink href="/contact">
      <a>04. Contact.</a>
    </ActiveLink>

    <div className="header-nav-close" onClick={toggleMenu}></div>
  </nav>
}

export default Menu;
