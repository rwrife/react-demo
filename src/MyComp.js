import React from 'react';
import logo from './logo.svg';

class MyComponent extends React.Component {
    render() {
        return (
      <div className={this.props.className || 'MyComponent'}>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
        }
  }

  export default MyComponent;