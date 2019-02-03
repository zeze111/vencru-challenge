import React, { Component } from 'react';
import MainContent from './content/MainContent';

import NavBar from './navBar/NavBar';
import '../assets/css/navbar.css';
import '../assets/css/main.css'
import '../assets/css/modal.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeMenu: "main-content"
    }
  }

  setActiveMenu = (active) => {
    this.setState({ activeMenu: active })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          activeMenu={this.state.activeMenu}
          setActiveMenu={this.setActiveMenu}
        />
        <MainContent activeMenu={this.state.activeMenu} />
      </div>
    );
  }
}

export default App;
