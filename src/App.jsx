import { useState,useEffect, useRef } from 'react'
import styles from './app.module.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Lenis from '@studio-freight/lenis'

const App = ({bgColor,color,setColor,setBgColor ,setToggleMenu, isToggleMenu,wtColor, btColor}) => {
  const [isMediumScreen, setMediumScreen] = useState(window.innerWidth<=1024)
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth<=600)
  const lenis = new Lenis()
  const container = useRef(null)

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)

    }
    
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {

    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
      setMediumScreen(window.innerWidth <= 1024);
      setSmallScreen(window.innerWidth <= 600);
      setToggleMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMediumScreen,isSmallScreen,height, width]);

  return (
 
    <div
    ref={container}
    // style={{ width: `${width}px` }}
     className={styles.container} > 

    <div  className={styles.header}> 
         <Header isMediumScreen={isMediumScreen}
                        isToggleMenu={isToggleMenu}
                        setToggleMenu={setToggleMenu}
                        setColor={setColor}
                        color={color}
                        setBgColor={setBgColor}
                        bgColor={bgColor}/>
       </div>
      <div className={styles.main}> 
     <Main setColor={setColor}
                  color={color}
                  isSmallScreen={isSmallScreen}
                  setToggleMenu={setToggleMenu}
                  isToggleMenu={isToggleMenu}
                  setBgColor={setBgColor}
                  bgColor={bgColor}
                  btColor={btColor}
                  wtColor={wtColor}/>
     </div>
    <div className={styles.footer}>
      <Footer color={color} 
      bgColor={bgColor}
      setColor={setColor}
      setToggleMenu={setToggleMenu}
      isMediumScreen={isMediumScreen}
      />
      </div>
    </div>

  )
}

export default App