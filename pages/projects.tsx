import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from '@/styles/About.module.css'
import {IoIosArrowForward} from 'react-icons/io';


const Projects = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.projectsbg}>
            <p>Home <IoIosArrowForward size={10}/> Our Projects</p>
            <h3 className={styles.headertext}>Our Projects</h3>
            <div className={styles.textborder}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects