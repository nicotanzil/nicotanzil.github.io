import OutwardLink from "../utils/outward-link/OutwardLink";
import "./AboutMe.css";

const AboutMe = (props) => {
	return (
		<section id="about-me" className="section-content">
			<div className="title">About Me</div>
			<div className="content-container">
				<div className="description">
					I'm currently working at <OutwardLink link="https://www.bca.co.id/en/Individu">Bank Central Asia (BCA)</OutwardLink> in Jakarta as a
					Software Engineer.
					<br />
					<br />
					From <b>2019-2023</b>, throughout my time in <OutwardLink link="https://binus.ac.id/">Binus&nbsp;University</OutwardLink> , I have been
					working on various projects and have a lot of experiences in guiding and assisting other students in their computer laboratory class as a
					Laboratory Teaching Assistant in the Laboratory Center Alam Sutera (LCAS).
					<br />
					<br />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
