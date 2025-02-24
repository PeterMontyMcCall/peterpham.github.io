import styles from './Hero.module.css'
import profile from '../../assets/profile_picture.png'

function Hero() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Minh Pham</h1>
                <p1 className={styles.description}>I'm an undergraduate Computer Science student at Western University. I specialized in frontend and backend development.</p1>
                <a href="mailto:pdminh2004@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={profile} alt="Headshot Picture" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}

export default Hero