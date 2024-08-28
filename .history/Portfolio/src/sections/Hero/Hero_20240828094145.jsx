import styles from './HeroStyles.module.css';

function Hero() {
  return (
    <section id="hero">
      <div>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
