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
						title="Software Development Engineer Intern"
						link=""
						subtitle="Blibli.com"
						image="assets/slc.jpeg"
						timespan="Sep 2022 - Feb 2023"
					>
						From 2022 to 2023, I worked as a Software Development Engineer Intern in{" "}
						<OutwardLink link="https://www.blibli.com/">Blibli.com</OutwardLink> in Jakarta. I worked in the Business-to-Government (B2G) team and my
						main task is to develop a web application that can be used by the government and business owners as a marketplace to buy various kinds of
						school supplies.
					</ExperienceCard>
					<ExperienceCard
						title="Fulltime Laboratory Assistant"
						link=""
						subtitle="Binus University"
						image="assets/slc.jpeg"
						timespan="Sep 2020 - Feb 2022"
					>
						From 2020 to 2022, I have been teaching and guiding students in{" "}
						<OutwardLink link="https://www.instagram.com/slcbinusuniv/">BINUS&nbsp;Software&nbsp;Laboratory&nbsp;Center</OutwardLink> in various
						computer science materials and topics as a full-time laboratory teaching assistant. Moreover, I have met a lot of remarkable and bright
						people along the way that help me to get better in coding. Definetely one of the best work experiences I have ever had!
					</ExperienceCard>
					<ExperienceCard
						title="Parttime Laboratory Assistant"
						link=""
						subtitle="Binus University"
						image="assets/slc.jpeg"
						timespan="Feb 2020 - Jul 2020"
					></ExperienceCard>
				</div>
			</div>
		</section>
	);
};

export default Experience;
