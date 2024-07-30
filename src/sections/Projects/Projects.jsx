import styles from "./ProjectsStyles.module.css";
import utube from "../../assets/utube2.png";
import airbnb from "../../assets/airbnb2.png";
import amazon from "../../assets/amazon2.png";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={utube}
					code="https://github.com/Abdul-Sayed/Utube"
					link="https://reactutube.netlify.app"
					p="Utube Video Player"
				/>
				<ProjectCard
					src={airbnb}
					code="https://github.com/Abdul-Sayed/AireBnb"
					link="https://aire-bnb.vercel.app"
					p="AireBnb Vacation Rentals"
				/>
				<ProjectCard
					src={amazon}
					code="https://github.com/Abdul-Sayed/Amozon"
					link="https://amozon.vercel.app/"
					p="Amozon Shopping"
				/>
			</div>
		</section>
	);
}

export default Projects;
