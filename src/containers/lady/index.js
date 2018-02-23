import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import doChunk from '../../common/utils/doChunk';
import 'font-awesome/css/font-awesome.min.css';

import sticky from './sticky_slider.css';
import cart from './full_cart.gif';
import google from './google.png';

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
           isLoading:true,
           itemRequired:doChunk(this.props.items, this.props.recordsPerPage)
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
        this.setState({
            isLoading: false,
        });
        console.log(this.state.itemRequired[this.state.currentPage-1]);
    }
    render(){
       console.log('parent render' + this.props.items.length);
       let content;
       if(this.state.isLoading){
           content = <div className={spinner.loader}>LOADING</div>
       }else{
           content = <div>
                        <Gallery images={this.state.itemRequired[this.state.currentPage-1]}/>
                        <StickyMenu/>
                        <div className={navDotsStyles.dots_container}>
                            <div className={navDotsStyles.dots_nav}>
                                <nav id="nav-dots" className={navDotsStyles.nav_dots}>
                                {this.createPages(this.props.numOfPages)}
                                </nav>   
                            </div>
                        </div>
                    </div>
       }
       return(<div>{content}</div>)
    }
}


function mapStateToProps(state) {
  let recordsPerPage = state.initialiseRecordsPerPageReducer.recordsPerPage;
  let items =state.retrieveProductReducer.womenProductList.data.productByProductType;
  let numOfPages =Math.ceil(items.length/recordsPerPage);
 
 
  return { items:items,numOfPages:numOfPages,recordsPerPage:recordsPerPage }
}


export default connect(mapStateToProps)(Lady);
       
