import "./Skills.css";

const Skills = (props) => {
	return (
		<section id="skills" className="section-container">
			<div className="title">Skills</div>
			<div className="content-container">
				<div className="skills-container">
					<div className="skill-title">Language</div>
					<ul>
						<li>Javascript</li>
						<li>Typescript</li>
						<li>Python</li>
						<li>PHP</li>
						<li>Go</li>
						<li>HTML</li>
						<li>CSS/SCSS</li>
						<li>SQL</li>
						<li>R</li>
						<li>Java</li>
						<li>C/C++</li>
					</ul>
				</div>
				<div className="skills-container">
					<div className="skill-title">Framework</div>
					<ul>
						<li>Vue.js</li>
						<li>React</li>
						<li>AngularJS</li>
						<li>Laravel</li>
						<li>Flask</li>
					</ul>
				</div>
				<div className="skills-container">
					<div className="skill-title">Tools & Others</div>
					<ul>
						<li>Git & Github</li>
						<li>Postman</li>
						<li>JQuery</li>
						<li>Bootstrap</li>
						<li>GraphQL</li>
						<li>gqlgen</li>
						<li>Mikrotik</li>
					</ul>
				</div>
				<div className="skills-container">
					<div className="skill-title">Database</div>
					<ul>
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li>Firebase Storage (NoSQL)</li>
					</ul>
				</div>
				<div className="skills-container">
					<div className="skill-title">ML/DL/ANN Libraries</div>
					<ul>
						<li>Tensorflow</li>
						<li>OpenCV2</li>
						<li>Keras</li>
					</ul>
				</div>
				<div className="skills-container" id="familiar">
					<div className="skill-title">Familiar With</div>
					<ul>
						<li>Kotlin</li>
						<li>Android</li>
						<li>C#</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
