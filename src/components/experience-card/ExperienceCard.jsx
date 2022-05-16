import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<div className={`card ${ctx.theme === "dark" ? "card-dark" : ""}`}>
			<div className="image">
				<img src={props.image} alt={props.title} />
			</div>
			<div className="content">
				<span className="title">{props.title}</span>
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
