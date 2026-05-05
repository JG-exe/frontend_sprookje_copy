import {Link, NavLink} from "react-router";
import routes from "./routes.js";

function Footer() {
    return (
        <footer>
            <div className="ctx flexRowSpaceBetween">
                <img src="../assets/erWasEensLogosqr.svg" id="footerLogo"/>
                <div className="spacer"></div>
                <input
                    type="search"
                    name="search"
                    id="footerSearch"
                    placeholder="Zoek een verhaal"
                />
                <div className="links">
                    <h4>Pagina's</h4>
                    <ul className="nav">
                        {routes.map((link) => (
                            <Link to={link.route}>
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
