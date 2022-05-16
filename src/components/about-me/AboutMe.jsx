import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import OutwardLink from "../utils/outward-link/OutwardLink";
import "./AboutMe.css";

const AboutMe = (props) => {
	const themeContext = useContext(ThemeContext);

	return (
		<section id="about-me" className="about-me">
			<h1>About Me</h1>
			<div className="description">
				I'm currently studying at <OutwardLink link="https://www.hanyang.ac.kr/">Hanyang&nbsp;University</OutwardLink> in
				South Korea 🇰🇷 as an exchange student for this year's spring semester.
				<br />
				<br />
				<b>Throughout my time in Binus</b>, I have been working on various projects and have a lot of experiences in guiding
				and assisting other students in their computer laboratory class as a Laboratory Teaching Assistant in the Laboratory
				Center Alam Sutera (LCAS).
				<br />
				<br />
				Furthermore, I'm currently working on a freelance project as a full-stack web developer.
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
				<a
					className={themeContext.theme === "dark" ? "dark" : ""}
					href="mailto:tanzilclementius@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fas fa-envelope"></i>
				</a>
			</div>
		</section>
	);
};

export default AboutMe;
