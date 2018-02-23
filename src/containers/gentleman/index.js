import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

class Gentleman extends Component{
    render(){
       return(
           <div>
                Gentleman page
                 <Link to='/'>home</Link>
            </div>
        )
    }
}

export default Gentleman;