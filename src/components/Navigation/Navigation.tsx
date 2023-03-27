import styles from './Navigation.module.css';

import Email from '../../svg/Email';
import Github from '../../svg/Github';
import LinkedIn from '../../svg/LinkedIn';
import Twitter from '../../svg/Twitter';
import { useState } from 'react';
import Sun from '../../svg/Sun';
import Moon from '../../svg/Moon';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.querySelector('body')!.setAttribute('data-theme', 'light');
    } else {
      document.querySelector('body')!.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <motion.div
      initial={{
        top: '0%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
      }}
      animate={{
        position: 'fixed',
        top: '2%',
        left: '50%',
        transform: 'translate(-50%, -5%)',
        zIndex: 100,
        transition: {
          duration: 1,
          bounce: 0.5,
        },
      }}
    >
      <nav className={styles.Navigation}>
        <a href='https://github.com/garbalau-github' target='_blank'>
          <Github />
        </a>
        <a href='https://www.linkedin.com/in/garbalau-in/' target='_blank'>
          <LinkedIn />
        </a>
        <a href='mailto:garbalaunick@gmail.com' target='_blank'>
          <Email />
        </a>
        <a href='https://twitter.com/garbalau_n' target='_blank'>
          <Twitter />
        </a>
        <button className={styles.ThemeToggler}>
          <span onClick={toggleTheme}>{!isDark ? <Moon /> : <Sun />}</span>
        </button>
      </nav>
    </motion.div>
  );
};

export default Navigation;
