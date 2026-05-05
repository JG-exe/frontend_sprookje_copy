import { Link, NavLink } from "react-router";
import Routes from "./Routes.js";

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
              {Routes.map((link) => (
                  <NavLink to={link.route}>{link.label}</NavLink>
              ))}
              <li>
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Search a story..."
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
