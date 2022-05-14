import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./Introduction.css";

const Introduction = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<section id="introduction" className="introduction">
			<div className="left-container">
				<img
					// src="https://media-exp1.licdn.com/dms/image/C5603AQE1U2rb-2GcjQ/profile-displayphoto-shrink_400_400/0/1648725741979?e=1657756800&v=beta&t=OQhEI1e4VN7QS2R9ESVkuslcDSC1j36edure2SUpoYY"
					src="assets/avatar.png"
					alt="Profile"
					className={`profile-image ${ctx.theme === "dark" ? "profile-image-dark" : ""}`}
				/>
			</div>
			<div className="right-container">
				<h1>Hi there!</h1>
				<p className="intro-text">
					My name is Clementius N Tanzil. I'm a CS student at{" "}
					<a href="https://binus.ac.id/" className="link">
						Binus University
					</a>
					, Jakarta, Indonesia 🇮🇩. Looking forward to meeting you!
				</p>
			</div>
		</section>
	);
};

export default Introduction;
