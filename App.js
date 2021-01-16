import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
import './App.css';


const rootElement = document.getElementById("root");
class App extends Component {

  render () {

  return (
    <div className="App">
     <h1 style={{color: 'blue'}}>Hello in my profile</h1> 
     <ProfilePhoto/>
     <FullName/>
     <Adress/>
    </div>
  );
}
}

ReactDOM.render(<App />,rootElement);
export default App;
