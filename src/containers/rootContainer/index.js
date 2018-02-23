import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from '../home';
import Lady from '../lady';
import Products from '../products';
import Gentleman from '../gentleman';
import Steps from '../steps';
import PageNotFound from '../pageNotFound';
import Summary from '../summary';
import ComingSoon from '../coming_soon'

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Root extends Component{
    render(){
       return( 
           <Router>
           <Switch>
                    <Route exact path="/" component={Home}/>
                    //<Route path='/lady' component={Lady}/>
                    //<Route path='/gentleman' component={Gentleman}/>
                    <Route path='/products/:productType' component={Products}/>
                    <Route path='/steps' component={Steps}/>
                    <Route path='/summary' component={Summary}/>
                    <Route path='/pageNotFound' component={PageNotFound}/>
                    <Route path='/comingSoon' component={ComingSoon}/>
             </Switch> 
            </Router>
        )
    }
}

export default Root;