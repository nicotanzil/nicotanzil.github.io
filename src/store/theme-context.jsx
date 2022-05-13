import { createContext, useState } from "react";

const ThemeContext = createContext({
	toggleTheme: () => {},
	getTheme: () => {},
});

export const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const getTheme = () => {
		if (theme === "light") {
			return {
				color: "#ffffff",
				background: "#ffffff",
				backgroundParticles: "#ffffff",
				backgroundParticlesOpacity: 0.5,
				backgroundParticlesColor: "#ffffff",
			};
		} else {
			return {
				color: "#000000",
				background: "#000000",
				backgroundParticles: "#000000",
				backgroundParticlesOpacity: 0.5,
				backgroundParticlesColor: "#000000",
			};
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: theme,
				toggleTheme,
				getTheme,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
