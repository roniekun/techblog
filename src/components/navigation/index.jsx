import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { gsap } from 'gsap'
import Navlinks from './navlinks'
import Socials from '../../assets/icons/soclals';

const Navigation = ({isToggleMenu, setToggleMenu, isMediumScreen,
   isSmallScreen , setColor, color, setBgColor, bgColor}) => {
  const container = useRef(null);
  const content = useRef(null);

useEffect(() => {
  if (isToggleMenu){
  gsap.to(container.current,{y:'0%', height: '85%' })
  gsap.to(content.current,{y: 0, opacity: 1,})
  setColor('whitesmoke')
  setBgColor('black')
  }
  else {
    gsap.to(content.current,{opacity: 0, y:' 85%'})
    gsap.to(container.current,{  y: '-100%'})
  }
  return () => {
    null
  }
}, [isToggleMenu])

  return (
    <div 
    ref={container}
    className={styles.container} >
      <div className={styles.content}
                ref={content}>  
          <div className={styles.linksContainer}>
        <h5 className={styles.title}>Navigations</h5>
       < Navlinks
        isToggleMenu={isToggleMenu}
        setToggleMenu={setToggleMenu}
        containerProps={{flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center', 
                                        gap: '20px'}}
        linkProps={{color: 'lightgray',
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
      linkProps={{fontSize:  isSmallScreen ? '14px': '20px', 
                            width: 'fit-content',
                            height: 'fit-content',
                            textTransform: 'uppercase',
                            color: 'whitesmoke' }} />
      </div>
      </div>
    </div>
  )
}

export default Navigation