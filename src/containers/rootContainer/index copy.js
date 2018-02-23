import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home';
import Lady from '../lady';
import Products from '../products';
import Gentleman from '../gentleman';
import Checkout from '../checkout';
import PageNotFound from '../pageNotFound';
import Summary from '../summary';
class Root extends Component{
    render(){
       return(
           <div>
             
                    <Route exact path="/" component={Home}/>
                    <Route path='/lady' component={Lady}/>
                    <Route path='/gentleman' component={Gentleman}/>
                    <Route path='/products/:productType' component={Products}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/summary' component={Summary}/>
                    <Route path='/*' component={PageNotFound}/>
               
            </div>
        )
    }
}

export default Root;