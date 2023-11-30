import styles from './index.module.css'
import { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './menu'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../navigation'
// import { Turn as Hamburger } from 'hamburger-react' //https://hamburger-react.netlify.app/

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu,
                              color,setColor,bgColor, setBgColor}) => {

                                const [props, setProps] = useState({ height: 0, width: 0 });
                                const button = useRef(null);
                              
                                useEffect(() => {
                                  if (button.current) {
                                    const { height, width } = button.current.getBoundingClientRect();
                                    setProps({ height, width });
                                  }
                                  console.log(props.height, props.width)
                                }, [button]);
  

  const handleScrollToTop = () => {
    setToggleMenu(false)
    setColor('black')
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className={styles.container} 
      style={{color: color, 
      backgroundColor: bgColor,
      paddingInline: isMediumScreen ? '5%' : '10%'}} >
      <div className={styles.logoContainer}>
      <span>&copy;</span>

        <NavLink
            to='/'
            onClick={handleScrollToTop}
            style={{color:color,
            fontSize:'.5rem'}}
             className={styles.logo}>
                        <h1>Code by Ronie</h1>
        </NavLink>

        </div>
        <div className={styles.navigation}>
        <AnimatePresence>
        {isToggleMenu && 
        <Navigation
                props={{height: props.height, width: props.width}}
                isMediumScreen={isMediumScreen}
                setToggleMenu={setToggleMenu}
                  isToggleMenu={isToggleMenu}
                  setColor={setColor}
                  color={color}
                  setBgColor={setBgColor}
                  bgColor={bgColor}
                  />
          }

          </AnimatePresence>
        </div>

         <Button 
            ref={button}
            bgColor={bgColor}
            color={color}
            setToggleMenu={setToggleMenu}
            isToggleMenu={isToggleMenu}
            /> 

        </div>
  )

}

export default Header