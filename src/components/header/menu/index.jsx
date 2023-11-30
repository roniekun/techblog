import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const Button = React.forwardRef(({ isToggleMenu, setToggleMenu, color, bgColor }, ref) => {
  const handleClick = () => {
        setToggleMenu(!isToggleMenu);
  };

  return (
    <motion.div
     ref={ref}
     style={{color: isToggleMenu ? 'white' : color}}
      onClick={handleClick} 
      whileHover={{
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
          <motion.span
           whileHover={{color: 'whitesmoke',
         duration: .3}}
          >Open</motion.span>
        </div>
        <div className={styles.el}>
          <span>Close</span>
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
