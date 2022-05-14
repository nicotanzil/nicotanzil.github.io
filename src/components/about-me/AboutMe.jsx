import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./AboutMe.css";

const AboutMe = (props) => {
	const themeContext = useContext(ThemeContext);

	return (
		<section id="about-me" className="about-me">
			<h1>About Me</h1>
			<div className="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor accumsan tellus eu pharetra. Praesent
				commodo commodo tellus, sed cursus nunc tristique vitae. Praesent at ultricies ipsum.
			</div>
			<div className="icons">
				<a
					className={themeContext.theme === "dark" ? "dark" : ""}
					href="https://www.linkedin.com/in/clementius-nichklaus-tanzil-328b851a2/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					className={themeContext.theme === "dark" ? "dark" : ""}
					href="https://www.instagram.com/tanzilclementius/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					className={themeContext.theme === "dark" ? "dark" : ""}
					href="https://twitter.com/nicotanzil"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-twitter"></i>
				</a>
				<a
					className={themeContext.theme === "dark" ? "dark" : ""}
					href="https://github.com/nicotanzil"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github"></i>
				</a>
			</div>
		</section>
	);
};

export default AboutMe;
