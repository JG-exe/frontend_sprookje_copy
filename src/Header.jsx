import { Link } from "react-router";

function Header() {
	return (
		<>
			<header>
				<div className="ctx">
					<h1>Er waren eens...</h1>
					<nav>
						<ul>
							<Link to="/">
								<li>home</li>
							</Link>
							<Link to="/Rumpelstiltskin">
								<li>My fairy tale</li>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
