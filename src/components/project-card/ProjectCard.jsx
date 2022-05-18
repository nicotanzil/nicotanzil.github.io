import { useContext } from "react";
import "./ProjectCard.css";
import ThemeContext from "../../store/theme-context";

const ProjectCard = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<div className={`project-card ${ctx.theme === "dark" ? "card-dark" : ""}`}>
			<div className="card-content">
				<div className="card-title">{props.title}</div>
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

export default ProjectCard;
