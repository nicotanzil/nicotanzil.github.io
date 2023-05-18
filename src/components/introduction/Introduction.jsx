import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import OutwardLink from "../utils/outward-link/OutwardLink";
import "./Introduction.css";

const Introduction = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<section id="introduction" className="introduction">
			<div className="left-container">
				<img
					// src="https://media-exp1.licdn.com/dms/image/C5603AQE1U2rb-2GcjQ/profile-displayphoto-shrink_400_400/0/1648725741979?e=1657756800&v=beta&t=OQhEI1e4VN7QS2R9ESVkuslcDSC1j36edure2SUpoYY"
					src="assets/avatar2.jpg"
					alt="Profile"
					className={`profile-image ${ctx.theme === "dark" ? "profile-image-dark" : ""}`}
				/>
			</div>
			<div className="right-container">
				<h1>Hi there! 👋</h1>
				<p className="intro-text">
					<b>Nico here</b>! I'm a Junior Software Engineer based in Jakarta, Indonesia 🇮🇩. <br />
				</p>
				<div className="icons">
					<a className="icon" href="https://www.linkedin.com/in/clementius-nichklaus-tanzil-328b851a2/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin"></i>
					</a>
					<a className="icon" href="https://www.instagram.com/tanzilclementius/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram"></i>
					</a>
					<a className="icon" href="https://twitter.com/nicotanzil" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter"></i>
					</a>
					<a className="icon" href="https://github.com/nicotanzil" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<a className="icon" href="mailto:tanzilclementius@gmail.com" target="_blank" rel="noopener noreferrer">
						<i className="fas fa-envelope"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
