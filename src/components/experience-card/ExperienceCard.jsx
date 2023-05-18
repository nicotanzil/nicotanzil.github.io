import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<div className="experience-card">
			{/* <div className="image">
				<img src={props.image} alt={props.title} />
			</div> */}
			<div className="card-content">
				<span className="card-title">{props.title}</span>
				<span className="card-subtitle">{props.subtitle}</span>
				<span className="timespan">{props.timespan}</span>
				{props.link === "" ? null : (
					<a href={props.link} className="link" target="_blank" rel="noopener noreferrer">
						Check it out!
					</a>
				)}
				<span className="description">{props.children}</span>
				<ul className="stack-list">
					{props.stacks
						? props.stacks.map((stack) => (
								<li key={stack} className={`stack ${ctx.theme === "dark" ? "dark" : ""}`}>
									{stack}
								</li>
						  ))
						: ""}
				</ul>
			</div>
		</div>
	);
};

export default ExperienceCard;
