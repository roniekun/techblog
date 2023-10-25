import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import Navlinks from '../navigation/navlinks'
import { Turn as Hamburger } from 'hamburger-react' //https://hamburger-react.netlify.app/

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu,
                              color,setColor,bgColor, setBgColor}) => {
  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
  }
  const handleScrollToTop = () => {
    setToggleMenu(false)
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className={styles.container} 
      style={{color: color, backgroundColor: bgColor}} >
      <div className={styles.logoContainer}>
        <NavLink
            to='/'
            onClick={handleScrollToTop}
            style={{color:color}}
             className={styles.logo}>
                        <h1>&copy;Brand Identity</h1>
        </NavLink>
        </div>
        <p style={{fontSize:'10px',}}>*This is a template*</p>
      {!isMediumScreen &&
      <div className={styles.navlinkContainer}>
        <Navlinks containerProps={{gap: '10px'}}
                          linkProps={{textTransform: 'uppercase',
                                                fontSize: '16px',
                                                fontWeight: '450',
                                                color: color}}/>
         </div>
       }
     { isMediumScreen &&  
     <div
     style={{padding: '0', zIndex: '999', marginInline: '2%'}}
     onClick={handleClick}>
     <Hamburger
     toggled={isToggleMenu}
      size={18}/>
       </div> }
        </div>
  )
}

export default Header