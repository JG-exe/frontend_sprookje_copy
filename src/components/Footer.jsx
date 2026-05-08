import {Link, NavLink} from "react-router";
import NavRoutes from "../routes/constants/NavRoutes.js";

function Footer() {
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
