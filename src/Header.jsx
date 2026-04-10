import { Link, NavLink } from "react-router";

function Header() {
  const navLinks = [
    { href: "/", label: "home" },
    { href: "/All", label: "alle verhalen" },
    { href: "/MakingOf", label: "making of..." },
  ];
  return (
    <>
      <header>
        <div className="ctx flexRowSpaceBetween">
          <Link to="/">
            <img src="../assets/erWasEensLogoRect.svg" id="headerLogo" />
          </Link>
          <nav>
            <ul className="nav">
              <NavLink to="/">
                <li>home</li>
              </NavLink>
              <NavLink to="/All">
                <li>alle verhalen</li>
              </NavLink>
              <NavLink to="/MakingOf">
                <li>Making of...</li>
              </NavLink>
              <li>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Zoek een verhaal"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
