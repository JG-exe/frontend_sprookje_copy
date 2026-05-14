import {Link, NavLink, useNavigate} from "react-router";
import NavRoutes from "../routes/constants/NavRoutes.js";
import Routes from "../routes/constants/Routes.js";
import {useContext, useEffect} from "react";
import {SearchContext} from "../contexts/SearchContext.jsx";

function Header() {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery) {
            navigate(Routes.All);
        }
    }, [searchQuery, navigate]);

    return (
        <>
            <header>
                <div className="ctx flexRowSpaceBetween">
                    <Link to={Routes.Home}>
                        <img src="./static/logos/erWasEensLogoRect.svg" id="headerLogo"/>
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
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
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
