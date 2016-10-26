import React from 'react';
import styles from '../styles/hello-world.scss';

class HelloWorldView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles.title}>Hello World</div>
    );
  }
}

export default HelloWorldView;
