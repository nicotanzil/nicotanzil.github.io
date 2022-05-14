import { useContext, useState } from "react";
import ThemeContext from "../../store/theme-context";
import "./ThemeToggle.css";

const ThemeToggle = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<div className="theme-toggle">
			<input
				type="checkbox"
				className="checkbox"
				id="checkbox"
				onChange={ctx.toggleTheme}
				checked={ctx.theme === "dark" ? true : false}
			/>
			<label htmlFor="checkbox" className="label">
				<i className="fas fa-moon"></i>
				<i className="fas fa-sun"></i>
				<div className="ball" />
			</label>
		</div>
	);
};

export default ThemeToggle;
