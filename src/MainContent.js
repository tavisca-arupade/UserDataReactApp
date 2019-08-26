import React from 'react';
import Users from './Users';

class MainContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:this.props.name};
    }
    render(){
      return <div id="main" style={{display:'none'}}>
        <p>{this.state.name}</p>
      </div>
    }
  }

  export default MainContent