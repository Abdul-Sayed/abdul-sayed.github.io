import styles from "./WorksStyles.module.css";

const Works = () => {
	return (
		<div className={styles.timeline}>
			<h1>Work History</h1>
			<div className={styles.checkpoint}>
				<div>
					<h2>Chubb</h2>
					<h3>Front End Developer</h3>
					<h4>02/2020 - 11/2021</h4>
					<p>
						At Chubb, I led the implementation of Angular and TypeScript-based features for the client portal, enhancing
						usability by collaborating with cross-functional teams under SCRUM methodologies. I also managed QA
						environments and coordinated code releases to ensure high-quality outputs and smooth functionality, working
						closely with design teams to improve user experience
					</p>
				</div>
			</div>
			<div className={styles.checkpoint}>
				<div>
					<h2>Freelance Private Clients</h2>
					<h3>Web Developer</h3>
					<h4>02/2022 - 12/2022</h4>
					<p>
						Spearheaded web development projects for small businesses, enhancing their online presence by tailoring
						sites to specific business needs. I collaborated with clients to align with their vision, managing the
						entire development lifecycle from design to deployment and maintenance, ensuring high-quality outcomes
					</p>
				</div>
			</div>
			<div className={styles.checkpoint}>
				<div>
					<h2>Data Annotation</h2>
					<h3>Quality Assurance Analyst</h3>
					<h4>04/2023 - Present</h4>
					<p>
						Conducted quality assurance for AI algorithms to enhance accuracy, decision-making capabilities, and
						reliability, optimizing them for improved data interpretation
					</p>
				</div>
			</div>
		</div>
	);
};

export default Works;
