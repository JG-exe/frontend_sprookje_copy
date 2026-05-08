import {Link, NavLink} from "react-router";
import NavRoutes from "../routes/constants/NavRoutes.js";
import Routes from "../routes/constants/Routes.js";

function Header() {
    return (
        <>
            <header>
                <div className="ctx flexRowSpaceBetween">
                    <Link to={Routes.Home}>
                        <img src="./assets/logos/erWasEensLogoRect.svg" id="headerLogo"/>
                    </Link>
                    <nav>
                        <ul className="nav">
                            {NavRoutes.map((link) => (
                                <NavLink to={link.route} key={link.route}>
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
