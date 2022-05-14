import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BackgroundParticles from "./components/BackgroundParticles";
import { useEffect } from "react/cjs/react.development";
import React, { useContext } from "react";
import ThemeContext from "./store/theme-context";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience/Experience";
import Sidebar from "./components/sidebar/Sidebar";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";

function App() {
	const ctx = useContext(ThemeContext);

	// initial useEffect
	useEffect(() => {}, []);

	return (
		<div className="App" id="app-root" data-theme={ctx.theme}>
			{/* <button onClick={ctx.toggleTheme} className="toggle-theme-button">
					Toggle Theme
				</button> */}
			<Sidebar />
			<div className="content">
				<Introduction />
				<AboutMe />
				<Experience />
			</div>
			<ThemeToggle />
			<BackgroundParticles className="background-particles" />
		</div>
	);
}

export default App;
