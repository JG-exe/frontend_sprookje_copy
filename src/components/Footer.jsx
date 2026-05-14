import {Link, useNavigate} from "react-router";
import NavRoutes from "../routes/constants/NavRoutes.js";
import Routes from "../routes/constants/Routes.js";
import {useContext, useEffect} from "react";
import {SearchContext} from "../contexts/SearchContext.jsx";

function Footer() {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery) {
            navigate(Routes.All);
        }
    }, [searchQuery, navigate]);
    
    return (
        <footer>
            <div className="ctx flexRowSpaceBetween">
                <img src="./assets/logos/erWasEensLogosqr.svg" id="footerLogo"/>
                <div className="spacer"></div>
                <input
                    type="search"
                    name="search"
                    id="footerSearch"
                    placeholder="Search a story..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="links">
                    <h4>Pages</h4>
                    <ul className="nav">
                        {NavRoutes.map((link) => (
                            <Link to={link.route} key={link.route}>
                                <li>{link.label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="ctx copyRight">
                <sub>Copyright &copy; 2026 EhB MCT (Joachim Gautama)</sub>
            </div>
        </footer>
    );
}

export default Footer;
