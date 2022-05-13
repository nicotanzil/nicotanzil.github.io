import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./Introduction.css";

const Introduction = (props) => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className="introduction">
			<h1>Introduction</h1>
		</div>
	);
};

export default Introduction;
