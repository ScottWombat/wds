import React, { Component } from 'react';
import PropTypes from 'prop-types';
import navDotsStyles from './navDots.css';
class Page extends Component{
    constructor(props){
        super(props);
        this.state={
          
      
        }
       this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
         console.log('exampleComponent mounted');
     }
    handleClick(event){
        console.log('rev')
      
    }
   
    render(){
      console.log('render......');
       return(
            
            <div>
            ddddd
           </div>
        )
    }
}

export default Page;