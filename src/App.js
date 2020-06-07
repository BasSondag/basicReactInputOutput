import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';



class App extends Component {
  state = {
    userNames: [
      {userName: "paragraph 1"}
    ]
  };
  nameChanghedHandler = (event) => {
    this.setState({
      userNames: [
        {userName: event.target.value}
      ]
    })
  }
  render() {
    return (
      <div className="App">
          <UserOutput
            name={this.state.userNames[0].userName} />

            <UserInput
              changed= {this.nameChanghedHandler}
              currentName={this.state.userNames[0].userName}/>
          <UserOutput
            name="paragraph 1 of seccond UserOutput" />
          <UserOutput
            name="paragraph 1 of thirt UserOutput" />
      </div>
    );
  }
}

export default App;
