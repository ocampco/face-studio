import React from 'react';
import './../styles/index.css';

const styles = {
  hero: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#c4ded1',
  },
};

const IndexPage = () => (
  <main>
    <div style={styles.hero}>
      <h1>Face Studio By Annie</h1>
    </div>
  </main>
);

export default IndexPage;
