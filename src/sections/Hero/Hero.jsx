import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avatar3.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === "light" ? sun : moon;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

	return (
		<section id="hero" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img src={heroImg} className={styles.hero} alt="Profile picture" />
				<img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
				<div className={styles.socials}>
					<a href="https://github.com/Abdul-Sayed" target="_blank">
						<img src={githubIcon} alt="Github icon" />
					</a>
					<a href="https://www.linkedin.com/in/abdul-sayed-engr" target="_blank">
						<img src={linkedinIcon} alt="Linkedin icon" />
					</a>
				</div>
			</div>
			<div className={styles.info}>
				<h1>
					Abdul
					<br />
					Sayed
				</h1>
				<h2>Software Developer</h2>
				<p className={styles.description}>
					Welcome to My Portfolio!🎉 I enjoy crafting user-friendly interfaces for small - enterprise applications. With
					expertise in software development, a diverse skill set, and a formal engineering education, I bring a unique
					perspective to every project.💻
				</p>
				<a href={resume} download className={styles.resume}>
					<button className="hover">Resume</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
