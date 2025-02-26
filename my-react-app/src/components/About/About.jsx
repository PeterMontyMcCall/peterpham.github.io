import styles from './About.module.css';
import { getImageUrl } from '../../utils'; 

function About() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
                <div className={styles.contentBlock}>
                    <div className={styles.stack}>
                        <img src={getImageUrl("frontend_icon.png")} alt="Front End Icon" className={styles.stackIcon}/>
                        <h2 className={styles.stackTitle}>Frontend</h2>
                        <p className={styles.stackDescription}>I'm a front-end developer with experience in building responsive and optimized sites</p>
                    </div>

                    <div className={styles.stack}>
                        <img src={getImageUrl("backend_icon.png")} alt="Back End Icon" className={styles.stackIcon}/>
                        <h3 className={styles.stackTitle}>Backend</h3>
                        <p className={styles.stackDescription}>I have experience developing fast and optimised back-end systems and APIs</p>
                    </div>

                    <div className={styles.stack}>
                        <img src={getImageUrl("UI_icon.png")} alt="UI Icon" className={styles.stackIcon}/>
                        <h3 className={styles.stackTitle}>UI Designer</h3>
                        <p className={styles.stackDescription}>I have designed multiple landing pages and have created design systems as well</p>
                    </div>
                </div>
        </section>
    );
}

export default About