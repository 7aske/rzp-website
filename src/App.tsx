import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Router } from "./router/Router";
import { HashRouter } from "react-router-dom";

function App() {
	return (
		<main className="App">
			<HashRouter basename="/">
				<Navbar/>
				<Router/>
				<Footer/>
			</HashRouter>
		</main>
	);
}

export default App;
