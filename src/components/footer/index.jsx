import React, { useEffect } from 'react'
import styles from './index.module.css'
import Navlinks from '../navigation/navlinks';
import Socials from '../../assets/icons/soclals';

const Footer = ({color, bgColor, setColor}) => {

  const date = new Date();
    // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

    const email = 'roniebenitez01@gmail.com';
    const subject = 'Project Request';
  
    const handleEmailClick = () => {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
      window.location.href = mailtoUrl;
    };

  return (
    <div
    style={{background: 'black'}}
     className={styles.container}>
        <div className={styles.sitemap}>
        <h4>Sitemap</h4>
        <Navlinks linkProps={{fontSize: '16px',
                                                color: 'whitesmoke',
                                                textTransform: 'uppercase',
      }}
      containerProps={{ gap: '14px'
      }}
      />
       </div>
      <div className={styles.itemContainer}>
      <div className={styles.socialContainer}>
          <h4>Let&apos;s Connect </h4>
        <Socials
        containerProps={{gap:'14px', flexWrap: 'wrap'}}
          linkProps={{ color: 'whitesmoke',
                                textTransform: 'uppercase',
                                fontSize: '16px'}}
          displayNames={true}/>
      </div>
      <div className={styles.emailContainer}>
      <h4>Email Me</h4>
      <p onClick={handleEmailClick} style={{color: "white"}}>roniebenitez01@gmail.com</p>
         </div>
      </div>
 

      <h5 className={styles.date}>&copy; {date.getFullYear()} All Rights Reserved </h5>
       
    </div>
  )
}

export default Footer