import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { dispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {default as UUID} from "node-uuid";
import imgLayout from './imgLayout.css';
import Image from './image';
import Popup from '../../components/popup';
//import changeImageSource from './changeImageSourceAction';
import addToCart from './addItemToCartAction';
import getProductList from './retrieveProductAction';
import ConfirmPopup from './confirmPopup';
class Gallery extends Component{
    
    constructor(props,context){
        super(props);
        this.state={
            isModalOpen: false,
            isContinueShoppingOpen:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePopupClick = this.handlePopupClick.bind(this);
        this.createImage = this.createImage.bind(this);
        this.createImages = this.createImages.bind(this);
        
    }
    createImage(product){
        //let source = product.image;
        return <Image product={product} action={this.handleClick} key={product.image} productType={this.props.productType}/>;
    }
    createImages(productList){
        return productList.map(this.createImage);
    }
    handleClick(source){
        if(source === 'close'){
            this.setState({
                isModalOpen:false,
            })
        }else{
            this.setState({
                isModalOpen:true,
                isContinueShoppingOpen:false,
                product:source
            })
        }
    }
    handlePopupClick(source){
        
            this.props.dispatch(addToCart(source));
            
            this.setState({
                isModalOpen:false,
                isContinueShoppingOpen:true
            })
        
    }
    
    componentWillMount() {
        this.id = UUID.v4();
    }
    render(){
        

        return(
            <div>
            <div className={imgLayout.photos} key={'imgcontainer'+this.id}>
            {this.createImages(this.props.productList)}
            </div>
            {this.state.isModalOpen?
            <Popup product={this.state.product} action={this.handlePopupClick}/>
            :null}
            {this.state.isContinueShoppingOpen?<ConfirmPopup/>:null}
            </div>
        )
    }
}


export default connect()(Gallery);

