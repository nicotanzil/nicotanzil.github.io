import "./OutwardLink.css";

const OutwardLink = (props) => {
	return (
		<a href={props.link} className="outward" target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	);
};

export default OutwardLink;
