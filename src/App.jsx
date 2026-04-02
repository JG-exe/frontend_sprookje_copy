import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Header";
import Rumpelstiltskin from "./pages/Rumpelstiltskin";
import Home from "./pages/home";

function App() {
	return (
		<>
			<BrowserRouter /*basename="/frontEnd-sprookje-JoachimGautama"*/>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route
						path="/Rumpelstiltskin"
						element={<Rumpelstiltskin />}
					/>
				</Routes>
			</BrowserRouter>
			<Header />
			<h1>The end!!</h1>
		</>
	);
}

export default App;
