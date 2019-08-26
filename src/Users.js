import React from 'react';

class Users extends React.Component{
    constructor(props){
      super(props)
      console.log(this.props);
      this.state= {name:this.props.name}
    }
    handleClick()
    {  
      this.setState({
        name: prompt("Enter new name")
      })
      console.log('The link was clicked.');
    }
    render(){
      return <p onClick={this.handleClick.bind(this)}>{this.state.name}</p>
  
    }
  }

  export default Users;