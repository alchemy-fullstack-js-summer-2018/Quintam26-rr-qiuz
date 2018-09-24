import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <h2>Welcome to Redux Quiz </h2>
          <p>Mario Quintana</p>
          <p>Source <a href="https://cdn4.bbend.net/media/com_news/story/2018/07/31/602695/main/PyrrosDimasVasiki.jpg">here.</a></p>
      </div>
    );
  }
}

export default Home;