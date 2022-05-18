import "./Project.css";
import ProjectCard from "../project-card/ProjectCard";

const Project = (props) => {
	return (
		<section id="project" className="section-container">
			<div className="title">Project</div>
			<div className="content-container">
				<div className="project-container">
					<ProjectCard
						title="Bella Vista"
						link="https://showerform.jexadev.com/"
						image="assets/bv.png"
						timespan="Jan 2022 - Now"
						stacks={["Vue.js", "Laravel", "SCSS", "Bootstrap", "JQuery", "MySQL", "Stripe"]}
					>
						My first Freelance project to create a Full-Stack web application which can be used to manage the items sold in
						the store as well as handling customer transactions using Stripe API. It can also handle multiple users and roles
						including administrator and customer.
					</ProjectCard>
					<ProjectCard
						title="SLC Web TPA - Staem"
						link="https://staem-angular.netlify.app/"
						image="assets/staem.png"
						timespan="Jan 2021 - Feb 2021"
						stacks={["AngularJS", "Go", "GraphQL", "GQLGen", "PostgreSQL", "SCSS", "RxJS", "Netlify"]}
					>
						My very first 'big' web application project to create a Full-Stack web application imitating the Steam web
						application. It can handle various activities related to Steam such as searching for games, adding games to cart,
						buying games, etc.
					</ProjectCard>
					<ProjectCard
						title="SLC Web Android - Konnect"
						link="https://play.google.com/store/apps/details?id=edu.bluejack20_2.Konnect"
						image="assets/konnect.webp"
						timespan="Mar 2021 - Apr 2021"
						stacks={["Android", "Kotlin", "Firebase", "NoSQL", "OAuth2"]}
					>
						Android app that can be used to meet with new potential job seeker (inspired by Linkedin). This project is the
						result of my collaboration with my fellow teaching assistant.
					</ProjectCard>
					<ProjectCard
						title="Web Programming Lab Project - Tokem"
						link="https://github.com/nicotanzil/tokem"
						image="assets/tokem.png"
						timespan="Sep 2021 - Oct 2021"
						stacks={["Laravel", "MySQL", "HTML", "CSS", "Bootstrap"]}
					>
						Laravel based web application that can be used to manage the items sold in the store as well as maintaining
						multiple users and roles.
					</ProjectCard>
				</div>
			</div>
		</section>
	);
};

export default Project;
