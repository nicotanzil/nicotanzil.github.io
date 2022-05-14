import "./Experience.css";
import "../experience-card/ExperienceCard";
import ExperienceCard from "../experience-card/ExperienceCard";

const Experience = (props) => {
	return (
		<section id="experience" className="experience">
			<div className="title">
				<h1>My Experiences</h1>
			</div>
			<div className="experience-container">
				<ExperienceCard
					title="Software Laboratory Teaching Assistant"
					link=""
					description="For the past two years, I have been teaching and guiding students in the Software Laboratory Center with various topics and tools. Met a lot of remarkable and bright people along the way. Definetly one of the best experiences I have ever had!"
					image="assets/slc.jpeg"
				/>
				<ExperienceCard
					title="Bella Vista"
					link="https://showerform.jexadev.com/"
					description="My first Freelance project (ever) to create a Full-Stack web application which can be used to manage the items sold in the store as well as handling customer transactions using Stripe API."
					image="assets/bv.png"
					stacks={["Vue.js", "Laravel", "SCSS", "MySQL", "Stripe"]}
				/>
				<ExperienceCard
					title="SLC Web TPA - Staem"
					link="https://staem-angular.netlify.app/"
					description="My very first 'big' web application project to create a Full-Stack web application imitating the Steam web application. It can handle various activities related to Steam such as searching for games, adding games to cart, buying games, etc."
					stacks={["AngularJS", "Go", "GraphQL", "GQLGen", "PostgreSQL", "SCSS", "RxJS", "Netlify"]}
				/>
				<ExperienceCard
					title="SLC Web Android - Konnect"
					link="https://play.google.com/store/apps/details?id=edu.bluejack20_2.Konnect"
					description="Android app that can be used to meet with new potential job seeker (inspired by Linkedin). This project is the result of my collaboration with my fellow teaching assistant"
					image="assets/konnect.webp"
					stacks={["Android", "Kotlin", "Firebase", "OAuth2"]}
				/>
			</div>
		</section>
	);
};

export default Experience;
