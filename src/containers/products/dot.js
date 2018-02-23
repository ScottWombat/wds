import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import navDotsStyles from './navDots.css';
class Dot extends Component{
    
    constructor(props){
        super(props);
        this.state={
           isActive:this.props.pageNo===this.props.currentPage?true:false,
      
        }
       this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
         console.log('Dot on componentDidMout' );
         console.log("page no:" + this.props.pageNo);
        console.log("currentPage:" + this.props.currentPage);
        this.setState({
            isActive:this.props.pageNo===this.props.currentPage?true:false,
        })
     }
    handleClick(event){
        console.log('rev' + this.props.key)
        this.setState({
            isActive:true
        })
    }
   
    render(){
      //console.log('Dot rendering......' + this.props.currentPage);
       return(
            <span className={this.state.isActive ? navDotsStyles.nav_dot_current : navDotsStyles.nav_dots} onClick={this.props.action} id={this.props.key}></span>

        )
    }
}

const mapStateToProps = (state) =>{
    return Object.assign({}, ...state, {
        pageNo: state.pageNoReducer.pageNo
        
    });
}

export default connect(
 mapStateToProps
)(Dot)

