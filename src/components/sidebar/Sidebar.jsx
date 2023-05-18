import { useContext, useEffect } from "react";
import ThemeContext from "../../store/theme-context";
import AnchorCircle from "../utils/anchor-circle/AnchorCircle";
import "./Sidebar.css";

const Sidebar = (props) => {
	const ctx = useContext(ThemeContext);

	const scrollTrigger = () => {
		// Get every section
		const sections = document.querySelectorAll("section");

		// Get the current scroll position
		const scrollPosition = window.scrollY;

		sections.forEach((section) => {
			const sectionHeight = section.offsetHeight;
			const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 50;
			let sectionId = section.getAttribute("id");

			if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
				document.querySelector("a[href='#" + sectionId + "']").classList.add("active");
			} else {
				document.querySelector("a[href='#" + sectionId + "']").classList.remove("active");
			}
		});
	};

	useEffect(() => {
		scrollTrigger();
	}, [ctx.theme]);

	// Change the active class of the sidebar
	window.addEventListener("scroll", scrollTrigger);

	return (
		<div className="side-bar">
			<nav className="navigation">
				<ul>
					<li>
						<a href="#introduction" className={ctx.theme === "dark" ? "dark" : ""}>
							<AnchorCircle text="Introduction" />
						</a>
						<a href="#about-me" className={ctx.theme === "dark" ? "dark" : ""}>
							<AnchorCircle text="About Me" />
						</a>
						<a href="#experience" className={ctx.theme === "dark" ? "dark" : ""}>
							<AnchorCircle text="Experience" />
						</a>
						<a href="#skills" className={ctx.theme === "dark" ? "dark" : ""}>
							<AnchorCircle text="Tech Stacks" />
						</a>
						<a href="#project" className={ctx.theme === "dark" ? "dark" : ""}>
							<AnchorCircle text="Project" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
