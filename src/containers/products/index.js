import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import doChunk from '../../common/utils/doChunk';
import 'font-awesome/css/font-awesome.min.css';

import sticky from './sticky_slider.css';


import imgLayout from './imgLayout.css';
import navDotsStyles from './navDots.css';
import spinner from './spinner.css';
import StickyMenu from '../stickyMenu';
import Gallery from '../gallery';
import Dot from './dot';

import {pageNoChanged} from '../../components/paging/pageNoAction';


class Products extends Component{
    
     constructor(props){
        super(props);
        this.state={
           currentPage:1,
           isLoading:true,
           productType: props.match.params.productType,
           itemRequired:doChunk(this.props.items, this.props.recordsPerPage)
           
        }
        
    }
    handler(e){
        this.setState({currentPage:e});
        this.props.updatePageNo(e);
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
       let content;
       if(this.state.isLoading){
           content = <div className={spinner.loader}>LOADING</div>
       }else{
           content = <div>
                        <Gallery productType={this.state.productType} productList={this.state.itemRequired[this.state.currentPage-1]}/>
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

function mapStateToProps(state,props) {
  let recordsPerPage = state.initialiseRecordsPerPageReducer.recordsPerPage;
  let items=null;
  if(props.match.params.productType === 'women'){
     let jsonString = localStorage.getItem('womenProductList');
     if(jsonString === null) {
         items =state.retrieveProductReducer.womenProductList.data.productByProductType;
     }else{
         items = JSON.parse(jsonString);
     }
    
  }else{
     let jsonString = localStorage.getItem('menProductList');
     if(jsonString === null) {
         items =state.retrieveProductReducer.menProductList.data.productByProductType;
     }else{
         items = JSON.parse(jsonString);
     }
       
  }
  let numOfPages =Math.ceil(items.length/recordsPerPage);
 
  return { items:items,numOfPages:numOfPages,recordsPerPage:recordsPerPage }
}

function mapDispatchToProps(dispatch){
   
    return ({
        updatePageNo: (currentPage) =>{
           dispatch(pageNoChanged(currentPage)) 
        }
    })
}
        
Products.propTypes = {
  updatePageNo: PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);
