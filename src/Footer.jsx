import { Link, NavLink } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="ctx flexRowSpaceBetween">
        <img src="../assets/erWasEensLogosqr.svg" id="footerLogo" />
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
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/All">
              <li>alle verhalen</li>
            </Link>
            <Link to="/MakingOf">
              <li>Making of...</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="ctx copyRight">
        <sub>Copyright (c) 2026 EhB MCT (Joachim Gautama)</sub>
      </div>
    </footer>
  );
}

export default Footer;
