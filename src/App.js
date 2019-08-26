import React from 'react';
import './App.css';
import  MainContent from './MainContent';
import  SideBar from './SideBar';
import ReactDOM from 'react-dom'


class App extends React.Component{
  render(){
      return <div id = "grid-container">
        <div id="sidebar"><SideBar /></div>        
        <div id="maincontent"><MainContent /></div>
      </div>
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
