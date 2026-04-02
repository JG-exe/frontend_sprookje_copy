import { Link } from "react-router";

function Header() {
	return (
		<>
			<header>
				<div className="ctx">
					<h1>Er waren eens...</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">home</Link>
							</li>
							<li>
								<Link to="/Rumpelstiltskin">My fairy tale</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
