import OutwardLink from "../utils/outward-link/OutwardLink";
import "./AboutMe.css";

const AboutMe = (props) => {
	return (
		<section id="about-me" className="section-content">
			<div className="title">About Me</div>
			<div className="content-container">
				<div className="description">
					I'm currently studying at <OutwardLink link="https://www.hanyang.ac.kr/">Hanyang&nbsp;University</OutwardLink> in
					South Korea 🇰🇷 as an exchange student for this year's spring semester.
					<br />
					<br />
					<b>Throughout my time in Binus</b>, I have been working on various projects and have a lot of experiences in
					guiding and assisting other students in their computer laboratory class as a Laboratory Teaching Assistant in the
					Laboratory Center Alam Sutera (LCAS).
					<br />
					<br />
					Furthermore, I'm currently working on a freelance project as a full-stack web developer.
				</div>
				<div className="icons">
					<a
						className="icon"
						href="https://www.linkedin.com/in/clementius-nichklaus-tanzil-328b851a2/"
						target="_blank"
						rel="noopener noreferrer"
					>
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

export default AboutMe;
