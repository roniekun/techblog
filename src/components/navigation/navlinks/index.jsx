import React from 'react';
import links from "./data";
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';
import { motion } from 'framer-motion';

const Navlinks = ({ linkProps, containerProps, setToggleMenu, isToggleMenu }) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link) {
      window.scrollTo({ top: 0 });
      navigate(link);
      setToggleMenu(false);
    }
  };

  return (
    <motion.div className={styles.container} style={containerProps}>
      {links.map((link, index) => (
        <motion.li
          key={index}
          whileHover={{ color: 'black', }}
          className={styles.link}
          style={linkProps}
          onTap={() => handleClick(link.to)}
        >
          {link.text}
        </motion.li>
      ))}
    </motion.div>
  );
};

export default Navlinks;
