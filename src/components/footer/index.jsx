import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './index.module.css'
import Navlinks from '../navigation/navlinks';
import Socials from '../../assets/icons/soclals';

const Footer = ({color, bgColor, setColor, isMediumScreen,
setToggleMenu}) => {

  const bottom= useRef(null);
  const footer= useRef(null);
  const date = new Date();

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  if(bottom && footer){
    gsap.from(bottom.current, {
      y: -100,
      brightness : 50,
      scrollTrigger: {
        trigger: footer.current,
        start: 'top center+=200px', // Adjust as needed
        end: 'bottom bottom', // Adjust as needed
        scrub: true,
      }
     })
    }
}, [bottom, footer])



    // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

    const email = 'roniebenitez01@gmail.com';
    const subject = 'Project Request';
  
    const handleEmailClick = () => {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
      window.location.href = mailtoUrl;
    };

  return (
    <footer
    ref={footer}
    >
    <div
    style={{background: 'black'}}
     className={styles.container}>
        <div className={styles.sitemap}>
        <h4>Sitemap</h4>
        <Navlinks linkProps={{fontSize: '.8rem',
                                                color: 'whitesmoke',
                                                textTransform: 'uppercase',
      }}
      containerProps={{ gap: '14px'
      }}
      setToggleMenu={setToggleMenu}
      />
       </div>
      <div className={styles.itemContainer}>
      <div className={styles.socialContainer}>
          <h4>
            Let&apos;s Connect 
            </h4>
        <Socials
        containerProps={{display: isMediumScreen ? 'grid' : 'flex',
         gridTemplateColumns: '1fr 1fr',
           gap:'14px', 
           flexWrap: 'wrap'}}
          linkProps={{ color: 'whitesmoke',
                                textTransform: 'uppercase',
                                fontSize: '.8rem'}}
          displayNames={true}/>
      </div>
      <div className={styles.emailContainer}>
      <h4>Email</h4>
      <p 
      onClick={handleEmailClick}
       style={{color: "white"}}
       >
        roniebenitez01@gmail.com
        </p>
         </div>
      </div>
 
      <h5 className={styles.date}>&copy; {date.getFullYear()} All Rights Reserved </h5>
       
    </div>
    <div 
    className={styles.bottomContainer}>
      <h1
       ref={bottom}
      className={styles.text}>RONIE-KUN</h1>
    </div>
  </footer>
  )
}

export default Footer