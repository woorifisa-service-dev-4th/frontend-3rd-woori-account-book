import React from 'react';
import GraphContainer from './GraphContainer';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.layout_footer}>
      <div className={styles.container_graphwrap}>
        <GraphContainer />
      </div>
    </footer>
  );
};

export default Footer;