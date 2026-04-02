import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Rumpelstiltskin from "./pages/Rumpelstiltskin";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<BrowserRouter /*basename="/frontEnd-sprookje-JoachimGautama"*/>
				<Header />
				<div className="ctx">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/Rumpelstiltskin"
							element={<Rumpelstiltskin />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
