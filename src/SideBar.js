import React from 'react';
import Users from './Users'

class SideBar extends React.Component{
    render(){
      return <div>
        <Users name="John" />
        <Users name="Sarah"/>
        <Users name="Mary"/>
      </div>
    }
  }

  export default SideBar;