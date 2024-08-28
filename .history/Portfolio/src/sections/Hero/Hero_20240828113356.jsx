import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Brian Jamiel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Brian
          <br />
          Jamiel
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>With a passion for developing modern React web apps for fun</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
