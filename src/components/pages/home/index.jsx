import styles from './index.module.css';
import data from './data';
import { useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import { useNavigate, NavLink, useFetcher } from 'react-router-dom';
import CarouselItem from '../../../assets/slideshow-carousel';
import Socials from '../../../assets/icons/soclals';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = ({setColor, color, setBgColor, bgColor, wtColor,btColor, isSmallScreen}) => {
  const [selected, setSelected] = useState();
  const secta = useRef(null);
  const sectb = useRef(null);
  const[windowHeight, setWindowHeight]=useState(window.innerHeight)

  const [height, setHeight] = useState([]);
  const gallery =  useRef(null);
  const slides = data.map(() => useRef(null));

  //Responsive Height Gallery
  useEffect(() => {

    const updateWindowHeight = () =>{
    setWindowHeight(window.innerHeight)

    if (slides) {
      setHeight(slides[1].current.offsetHeight)
    };
  }

    window.addEventListener('resize', updateWindowHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    }

  }, [slides,height, windowHeight]);

  // Setting the Header Theme
  useEffect(() => {
    setColor('black');
    setBgColor('transparent')
  }, [])

  const navigate = useNavigate();

  const handleImgClick = (to) =>{
    navigate(to);
  }

  const handleExplore = () => {
    sectb.current.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  const handleContact = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}
  // Animations

  // //Header background color
  // useEffect(() => {
  //   // Register the ScrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger);

  //   const trigger = ScrollTrigger.create({
  //     trigger: secta.current,
  //     start: "top+=160px top",
  //     end: "bottom bottom",
  //     onEnter: () => {
  //       setBgColor(btColor);
  //       setColor('whitesmoke');
  //     },
  //     onLeaveBack: () => {
  //       setBgColor('transparent');
  //       setColor(btColor);
  //     },
  //   });

  //   return () => {
  //     trigger.kill(); 
  //   };
  // }, [secta, btColor, wtColor]); 

// Pinning Gallery to crate card stack

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   if (gallery && slides) {

//    const pins =  slides.map((slide,index) => slide.current)
//     const trigger = ScrollTrigger.create({
//       trigger: gallery.current,
//       start: "top top+=60px",
//       pin: pins.forEach((pin, index) => pins[index+1]),
//       end: "bottom bottom",
//       scrub: true,
//       markers: true,
//     });

//     return () => trigger.kill();
//   }
// }, [gallery, slides]);



  
  return (
  <motion.div 
  initial={{zIndex: 2, opacity: 0 }}
  animate={{opacity:1, y:0, zIndex: 1 }}
  transition={{duration: .3}}
  className={styles.container}>

    <div
    ref={secta}
      className={styles.secta}>

    <div className={styles.heroContainer}>
      <h1 className={styles.hero}>
        Elevate Your Visual Journey
      </h1>
      </div>

      <div styles={styles.socialContainer}>
    </div>
    <div className={styles.itemContainer}>
      <p>Transforming Visions into Digital Masterpiece</p>
    <div className={styles.btnContainer}>
    <button onClick={handleExplore} className={styles. explore}>
       Explore
    </button>
      <NavLink to='/contact 'onClick={()=> {handleContact()}} className={styles. contact}>
         Get in touch
         </NavLink>
    </div>
    </div>
    </div>

    <motion.div
      ref={sectb}
          className={styles.sectb}>
    
    </motion.div>
    </motion.div>
  );
};

export default Home;

