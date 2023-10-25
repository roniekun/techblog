import styles from './index.module.css';
import data from './data';
import { useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import { useNavigate, NavLink } from 'react-router-dom';
import Slideshow from '../../../assets/slideshow-fade';
import Socials from '../../../assets/icons/soclals';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = ({setColor, color, setBgColor, bgColor, wtColor,btColor}) => {
  const [selected, setSelected] = useState(0);
  const secta = useRef(null);
  const sectb = useRef(null);

  useEffect(() => {
    setColor('#181818');
    setBgColor('transparent')
  }, [])

  useEffect(() => {
    setSelected(selected);
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected === data.length - 1 ? 0 : prevSelected + 1));
    }, 3500);
    
    return () => {
      clearInterval(interval); 
    };
  }, [selected]);

  const handleClick = (index) => {
    setSelected(index);
  };
  const handlePrevClick = ()=>{
    setSelected((prev) => (prev === 0 ? data.length  - 1 : prev - 1) ) ;
  }

  const handleNextClick = ()=>{
    setSelected((prev) => (prev ===  data.length-1  ? 0  : prev + 1) ) ;
  }

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

  
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: secta.current,
      start: "top+=160px top",
      end: "bottom bottom",
      onEnter: () => {
        setBgColor(btColor);
        setColor('whitesmoke');
      },
      onLeaveBack: () => {
        setBgColor(wtColor);
        setColor('black');
      },
    });

    return () => {
      trigger.kill(); 
    };
  }, [secta, btColor, wtColor]); 

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
          Custom Title
      </h1>
      </div>

      <div styles={styles.socialContainer}>
    </div>
    <div className={styles.itemContainer}>
      <p>Doloribus modi accusamus recusandae quibusdam eligendi assumenda numquam facilis ad voluptatem reprehenderit.
         Ullam cupiditate aliquid alias, voluptates rerum voluptate! Iure, omnis labore!</p>
    <div className={styles.btnContainer}>
    <button onClick={handleExplore} className={styles. explore}> Explore</button>
      <NavLink to='/contact'onClick={()=> {handleContact()}} className={styles. contact}> Contact</NavLink>
    </div>
    </div>
    </div>

    <motion.div
      ref={sectb}
          className={styles.sectb}>
            <div className={styles.category}>
              <h5>Category</h5>
              <div className={styles.lists}>
                {data.map((category, index) => (
                  <li key={index} onClick={() => handleClick(index)} >
                    {category.category}
                  </li>
                ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.slidesContainer}>
          {data.map((image, index) => (
         <Slideshow 
         onClick={()=>handleImgClick(image.to)}
         containerProps={{ opacity: index === selected ? 1 : 0,
          transitionDuration: '.7s',
           zIndex: index === selected ? 1 : -1}}
           image={image} key={index}/>
        ) )}
        </div >

              <div className={styles.arrowContainer}>
          <span onClick={handlePrevClick}>Previous</span>
          <span onClick={handleNextClick}>Next</span>
        </div>

      </div>
    </motion.div>
    </motion.div>
  );
};

export default Home;

