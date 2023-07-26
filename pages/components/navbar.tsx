import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);
  
    const  toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth)
        }
        if (typeof window !== 'undefined') {
          setScreenWidth(window.innerWidth);
          window.addEventListener('resize', changeWidth);
        }
    
        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('resize', changeWidth);
          }
        };
      },[])
  return (
    <div>
        <main>
      <header className={styles.headers}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/logo.png' width={50} height={50} alt='company logo' />
          </Link>
        
        </div>
          <nav>
            <ul>
          <li><Link href='/' className={styles.link}>Home</Link></li>
          <li><Link href='/about' className={styles.link}>Services</Link></li>
          <li><Link href='/about' className={styles.link}>Projects</Link>
            <ul className={styles.submenu}>
            <li><Link href='/about' className={styles.sublink}>project one</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project two</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project Three</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project four</Link></li>
            </ul>
          </li>
          <li><Link href='/aboutus' className={styles.link}>About Us</Link></li>
          <li><Link href='/about' className={styles.link}>Company Profile</Link></li>
          <li><Link href='/contactus' className={styles.link}>Contact Us</Link></li>
          </ul>
         
          </nav>
        {/* <div className='mx-2 my-2'>
          <button className='btn btn-light'>Get Free Quote</button>
        </div> */}
      </header>
      <div className={styles.mobilenavbody}>
      <nav >
        <div className={styles.mobilehamburger}>
        <button onClick={toggleNav} className={`${styles.hamburger} btn`}>BTN</button>
        </div>
          
          </nav>
          {(toggleMenu || screenWidth > 900) && 
          <div className={`${styles.mobilenav} `}>
          
            <ul>
            <li><Link href='/about' className={styles.mobilesubmenu}>Home</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>About</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Services</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Comoany Profile</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Contact Us</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Projects</Link></li>
            </ul>
          </div>
          }
              </div>
     </main>
    </div>
  )
}

export default Navbar