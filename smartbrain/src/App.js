import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation'
import Logo from "./components/Logo/Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/*
        <ImageLinkForm />
        <FaceRecognition />*/}
      </div>
    )
  }
}

export default App;
