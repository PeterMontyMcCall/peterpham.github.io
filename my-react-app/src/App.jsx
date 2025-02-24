import NavBar from './Components/NavBar/NavBar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import styles from './App.module.css'

function App() {

  return(
    <>
      <div className={styles.App}>
        <NavBar/>
        <Hero/>
      </div>
    </>
    
  );
}

export default App
