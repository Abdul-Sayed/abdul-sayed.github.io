import styles from "./SkillsStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
	return (
		<section id="skills" className={styles.container}>
			<h1 className="sectionTitle">Skills</h1>
			<div className={styles.skillList}>
				<p>HTML</p>
				<p>CSS</p>
				<p>SCSS</p>
				<p>JQuery</p>
				<p>JavaScript</p>
				<p>TypeScript</p>
				<p>React</p>
				<p>React Native</p>
				<p>Redux</p>
				<p>NextJS</p>
				<p>Tailwind CSS</p>
				<p>Angular</p>
				<p>Ionic</p>
				<p>Vue</p>
			</div>
			<hr />
			<div className={styles.skillList}>
				<p>Python</p>
				<p>Django</p>
				<p>Ruby</p>
				<p>Ruby on Rails</p>
				<p>Node</p>
				<p>Express</p>
				<p>Mongo DB</p>
				<p>SQL</p>
				<p>REST</p>
				<p>GraphQL</p>
			</div>
			<hr />
			<div className={styles.skillList}>
				<p>Git</p>
				<p>Github</p>
				<p>Jira</p>
				<p>Jenkins</p>
				<p>Jest</p>
				<p>SCRUM</p>
				<p>Agile</p>
			</div>
		</section>
	);
}

export default Skills;
