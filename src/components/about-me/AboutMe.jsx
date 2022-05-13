import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./AboutMe.css";

const AboutMe = (props) => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className="about-me">
			<h1>About Me</h1>
		</div>
	);
};

export default AboutMe;
