import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import Navlinks from './navlinks'
import {motion} from 'framer-motion'
import Socials from '../../assets/icons/soclals';

const Navigation = ({isToggleMenu, setToggleMenu, isMediumScreen,
   isSmallScreen , setColor, color, setBgColor, bgColor,props}) => {
  const container = useRef(null);
  const content = useRef(null);
  const {height , width} = props


  const menu = {

    open: {
        height: window.innerHeight <= 500 ? '100vh' : 'auto' ,
        width: isMediumScreen? '85vw' : '35vw', 
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
        marginTop: 10,
        zIndex: 99,
         marginRight: isMediumScreen ? 0 : '5%',
    },

    closed: {
        width: width,
        height: height,
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]},
        zIndex: 9,
        marginRight: isMediumScreen ? '5%' : '10%',
        marginTop: isMediumScreen ? 15 : 20
    }
}

const item = {
  open: {
      transition: {delay: .5, duration: .3},
      opacity :1,
  },

  closed: {
      opacity: 0,
      delay: .5,
  }
}

  return (
    <motion.nav
    variants={menu}
    animate={isToggleMenu ? "open" : "closed"}
     initial="closed"
     exit= "closed"
    ref={container}
    style={{
      height: height, 
      width: width,
      marginRight:  isMediumScreen ? '5%' : '10%', }}
    className={styles.container} >
      <motion.div className={styles.content}
                ref={content}
                variants={item}
                animate={isToggleMenu ? "open" : "closed"}
                initial="closed"
                exit= "closed"
                >  
          <div className={styles.linksContainer}>
        <h5 className={styles.title}>Navigations</h5>
       < Navlinks
        isToggleMenu={isToggleMenu}
        setToggleMenu={setToggleMenu}
        containerProps={{flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center', 
                                        gap: '20px'}}
        linkProps={{
                            color: 'whitesmoke',
                            fontSize: isSmallScreen ? '32px' : '45px',
                            fontWeight: '450',
                            fontFamily: 'DM Serif Text, sans-serif',
                            textTransform: 'capitalize'}}/>
        </div>
      <div className={styles.socialContainer}>
        <h5 className={styles.title}>Socials</h5>
      <Socials
      displayNames={true}
      containerProps={{width: '100%',
                                      gap: '10px',
                                       flexWrap: 'wrap',
                                      height: 'fit-content'}}
      linkProps={{fontSize:  '1rem', 
                            width: 'fit-content',
                            height: 'fit-content',
                            textTransform: 'uppercase',
                            color: 'whitesmoke' }} />
      </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation