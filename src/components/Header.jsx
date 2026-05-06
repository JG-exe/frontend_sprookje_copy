import {Link, NavLink} from "react-router";
import Routes from "../constants/Routes.js";

function Header() {
    return (
        <>
            <header>
                <div className="ctx flexRowSpaceBetween">
                    <Link to="/">
                        <img src="./assets/logos/erWasEensLogoRect.svg" id="headerLogo"/>
                    </Link>
                    <nav>
                        <ul className="nav">
                            {Routes.map((link) => (
                                <NavLink to={link.route}>
                                    <li>
                                        {link.label}
                                    </li>
                                </NavLink>
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
