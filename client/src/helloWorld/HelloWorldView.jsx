import React from 'react';

class HelloWorldView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="helloWorld">Hello World</div>
    );
  }
}

export default HelloWorldView;
