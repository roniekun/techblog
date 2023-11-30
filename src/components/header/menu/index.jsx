import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import { useEffect } from 'react';

const Button = React.forwardRef(({ isToggleMenu, setToggleMenu, color, bgColor }, ref) => {
  const handleClick = () => {
        setToggleMenu(!isToggleMenu);

  };

  return (
    <motion.div
     ref={ref}
      onClick={handleClick} 
      whileHover={{
      color: 'whitesmoke',
      backgroundColor: 'black',
    duration: .3}}
      className={styles.button}
      >
      <motion.div
        className={styles.slider}
        animate={{ top: isToggleMenu ? '-100%' : '0%' ,
                            }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <span
           className='menu-span'
          >Menu</span>
        </div>
        <div className={styles.el}>
          <span
          style={{color: isToggleMenu ? 'lightgray' : color}}
          >Close</span>
        </div>
      </motion.div>
    </motion.div>
  );
});

// function PerspectiveText({ label }) {
//   return (
//     <div className={styles.perspectiveText}>
//       <p className={styles.label1}>{label}</p>
//       <p className={styles.label2}>{label}</p>
//     </div>
//   );
// }

export default Button;
