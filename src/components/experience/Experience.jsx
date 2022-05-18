import "./Experience.css";
import "../experience-card/ExperienceCard";
import ExperienceCard from "../experience-card/ExperienceCard";
import OutwardLink from "../utils/outward-link/OutwardLink";

const Experience = (props) => {
	return (
		<section id="experience" className="section-content">
			<div className="title">Experience</div>
			<div className="content-container">
				<div className="experience-container">
					<ExperienceCard
						title="Fulltime Laboratory Assistant - BINUS SLC"
						link=""
						image="assets/slc.jpeg"
						timespan="Sep 2020 - Feb 2022"
					>
						From 2020 to 2022, I have been teaching and guiding students in{" "}
						<OutwardLink link="https://www.instagram.com/slcbinusuniv/">
							BINUS&nbsp;Software&nbsp;Laboratory&nbsp;Center
						</OutwardLink>{" "}
						in various computer science materials and topics as a full-time laboratory teaching assistant. Moreover, I have
						met a lot of remarkable and bright people along the way that help me to get better in coding. Definetely one of
						the best work experiences I have ever had!
					</ExperienceCard>
					<ExperienceCard
						title="Parttime Laboratory Assistant - BINUS SLC"
						link=""
						image="assets/slc.jpeg"
						timespan="Feb 2020 - Jul 2020"
					></ExperienceCard>
				</div>
			</div>
		</section>
	);
};

export default Experience;
