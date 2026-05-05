import { Link, NavLink } from "react-router";
import routes from "./routes.js";

function Header() {
  return (
    <>
      <header>
        <div className="ctx flexRowSpaceBetween">
          <Link to="/">
            <img src="../assets/erWasEensLogoRect.svg" id="headerLogo" />
          </Link>
          <nav>
            <ul className="nav">
              {routes.map((link) => (
                  <NavLink to={link.route}>{link.label}</NavLink>
              ))}
              <li>
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
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
