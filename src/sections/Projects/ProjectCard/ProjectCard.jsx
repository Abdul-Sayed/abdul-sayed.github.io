import React from "react";
import styles from "./ProjectCardStyles.module.css";
import github from "../../../assets/github.svg";

function ProjectCard({ src, code, link, p }) {
	return (
		<div className={styles.projectCard}>
			<a href={link} target="_blank" className={styles.liveLink}>
				<img className={styles.projectImg} src={src} alt={`${p} logo`} />
			</a>
			<a href={code} target="_blank" className={styles.githubLogo}>
				<img src={github} alt="github logo" />
			</a>
			<p className={styles.projectDescription}>{p}</p>
		</div>
	);
}

export default ProjectCard;
