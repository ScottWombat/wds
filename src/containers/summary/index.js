import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "./purchaseAction";

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'mymessage'
        };
    }
    
    
    render(){
        return(
            <div style={{margin: '0 auto'}}>
            <a onClick={() => this.props.purchaseAction(this.state.message)}>Purchase</a>
            </div>
        )
    }
}



export default connect(null,actionCreators)(Summary);