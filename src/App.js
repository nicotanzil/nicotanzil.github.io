import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BackgroundParticles from "./components/BackgroundParticles";
import { useEffect } from "react/cjs/react.development";
import React, { useContext } from "react";
import ThemeContext from "./store/theme-context";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/about-me/AboutMe";

function App() {
	const ctx = useContext(ThemeContext);

	// initial useEffect
	useEffect(() => {}, []);

	return (
		<div className="App" id="app-root" data-theme={ctx.theme}>
			{/* <button onClick={ctx.toggleTheme} className="toggle-theme-button">
					Toggle Theme
				</button> */}
			<Introduction />
			<AboutMe />
			<BackgroundParticles className="background-particles" />
		</div>
	);
}

export default App;
