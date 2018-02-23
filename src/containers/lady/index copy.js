import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';

import sticky from './sticky_slider.css';
import cart from './full_cart.gif';
import google from './google.png';
import img from './spicebomb.jpg';
import img1 from './daman.jpg';
import imgLayout from './imgLayout.css';
import navDotsStyles from './navDots.css';
import spinner from './spinner.css';
import StickyMenu from '../stickyMenu';
import Gallery from '../gallery';

import Dot from './dot';

class Lady extends Component{
    constructor(props){
        super(props);
        this.state={
           currentPage:1,
           pageTotal:1,
           recordsPerPage:64,
           isLoading:true,
           data:''
        }
      //this.handler = this.handler.bind(this);
    }
    handler(e){
        console.log("Parent" + e)
    }
    createPages(numOfPages){
        return Array(numOfPages).fill().map(function(index,i) {
            return (
                <Dot action={this.handler.bind(this,i+1)} currentPage={i+1} key={i+1}/>
            );
       },this);
    }
    componentDidMount() { 
        //this.setState ({isLoading: false})
        /*
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
            .then(response => {
                this.setState({
                    data: response.data,
                    loading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
        */
        //*/
        
      // setTimeout(function() {
      //      this.setState({isLoading: false})
       //}.bind(this), 5000);
       let configGraphQL={
           url: 'http://localhost:3000/graphql',
           method: 'post',
           data: {
                query:`query {
                    products {
                        id,
                        name,
                        price,
                        discount,
                        productType,
                        description,
                        image
                        }
                    }`
           }
       }
       axios(configGraphQL).then(response =>{
           let records =response.data.data.products;
           var count = Object.keys(records).length;
           records.forEach( function( item ) {
                console.log( item.name );
            });
           this.setState({pageTotal: count})
           this.setState({isLoading: false})
       }).catch(err =>{
           console.log(err);
       });
       
    }
    render(){
       console.log('parent render' + this.state.pageTotal);
       let content;
       if(this.state.isLoading){
           content = <div className={spinner.loader}>LOADING</div>
       }else{
           content = <div>
                        <Gallery recordsPerPage={this.state.recordsPerPage}/>
                        <StickyMenu/>
                        <div className={navDotsStyles.dots_container}>
                            <div className={navDotsStyles.dots_nav}>
                                <nav id="nav-dots" className={navDotsStyles.nav_dots}>
                                {this.createPages(this.state.pageTotal)}
                                </nav>   
                            </div>
                        </div>
                    </div>
       }
       return(<div>{content}</div>)
    }
}

//Lady.propTypes = {
//    numOfPages:PropTypes.number
//}


export default Lady;