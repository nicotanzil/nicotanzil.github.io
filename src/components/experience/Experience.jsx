import "./Experience.css";
import "../experience-card/ExperienceCard";
import ExperienceCard from "../experience-card/ExperienceCard";
import OutwardLink from "../utils/outward-link/OutwardLink";

const Experience = (props) => {
	return (
		<section id="experience" className="experience">
			<div className="title">
				<h1>My Experiences</h1>
			</div>
			<div className="experience-container">
				<ExperienceCard title="Fulltime Laboratory Assistant" link="" image="assets/slc.jpeg">
					From 2020 to 2022, I have been teaching and guiding students in{" "}
					<OutwardLink link="https://www.instagram.com/slcbinusuniv/">
						BINUS&nbsp;Software&nbsp;Laboratory&nbsp;Center
					</OutwardLink>{" "}
					in various computer science materials and topics as a full-time laboratory teaching assistant. Moreover, I have met
					a lot of remarkable and bright people along the way that help me to get better in coding. Definetely one of the
					best work experiences I have ever had!
				</ExperienceCard>
				<ExperienceCard
					title="Bella Vista"
					link="https://showerform.jexadev.com/"
					image="assets/bv.png"
					stacks={["Vue.js", "Laravel", "SCSS", "Bootstrap", "JQuery", "MySQL", "Stripe"]}
				>
					My first Freelance project (ever) to create a Full-Stack web application which can be used to manage the items sold
					in the store as well as handling customer transactions using Stripe API. It can also handle multiple users and
					roles including administrator and customer.
				</ExperienceCard>
				<ExperienceCard
					title="SLC Web TPA - Staem"
					link="https://staem-angular.netlify.app/"
					image="assets/staem.png"
					stacks={["AngularJS", "Go", "GraphQL", "GQLGen", "PostgreSQL", "SCSS", "RxJS", "Netlify"]}
				>
					My very first 'big' web application project to create a Full-Stack web application imitating the Steam web
					application. It can handle various activities related to Steam such as searching for games, adding games to cart,
					buying games, etc.
				</ExperienceCard>
				<ExperienceCard
					title="SLC Web Android - Konnect"
					link="https://play.google.com/store/apps/details?id=edu.bluejack20_2.Konnect"
					image="assets/konnect.webp"
					stacks={["Android", "Kotlin", "Firebase", "OAuth2"]}
				>
					Android app that can be used to meet with new potential job seeker (inspired by Linkedin). This project is the
					result of my collaboration with my fellow teaching assistant.
				</ExperienceCard>
				<ExperienceCard
					title="Web Programming Lab Project - Tokem"
					link="https://github.com/nicotanzil/tokem"
					image="assets/tokem.png"
					stacks={["Laravel", "MySQL"]}
				>
					Laravel based web application that can be used to manage the items sold in the store as well as maintaining
					multiple users and roles.
				</ExperienceCard>
			</div>
		</section>
	);
};

export default Experience;
