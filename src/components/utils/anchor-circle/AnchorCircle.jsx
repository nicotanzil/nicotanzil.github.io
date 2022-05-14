import { useContext } from "react";
import ThemeContext from "../../../store/theme-context";
import "./AnchorCircle.css";

const AnchorCircle = (props) => {
	const ctx = useContext(ThemeContext);

	return (
		<div className="anchor-container">
			{/* <svg viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<circle className="circle effect-3" cx="80" cy="80" r="50" />
			</svg> */}
			<span>{props.text}</span>
		</div>
	);
};

export default AnchorCircle;
