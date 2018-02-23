import React, { Component} from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
    constructor(props) {
    super(props);
    this.state = {
       qty: this.props.qty,
       itemId: this.props.itemId
    };
   
    this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if(value === 1) return ;
        //if(this.state.qty > value){
        //    value = value-1;
        //}else{
        //    value 
        //}
        
        
        this.setState({
            [name]: value
        });
        
        this.setState({
            qty:value
        })
       
        console.log(">>>>>>" +this.state.qty + ":" + value);
      
        let customerInfo =localStorage.getItem('customerInfo');
        let customerInfoObj = JSON.parse(customerInfo);
        var items = JSON.stringify(customerInfoObj.items);
        for(var i in customerInfoObj.items){
            var item = customerInfoObj.items[i];
            if(item.id === this.state.itemId){
                item.qty = parseInt(this.state.qty);
            }
        }
        localStorage.removeItem('customerInfo');
        localStorage.setItem('customerInfo',JSON.stringify(customerInfoObj))
        console.log("NEw:"+JSON.stringify(customerInfoObj));
    }
    componentDidMount(){
        console.log('didmount');
    }
    render() {
        const {prodId,qty} = this.props;
        return (
            <input
            name="qty"
            type="number"
            min="1"
            max="50"
            step="1"
            value={this.state.qty}
            onChange={this.handleInputChange} /> 
        );
    }
}

InputNumber.propTypes = {
  qty: PropTypes.number,
  itemId: PropTypes.string
};

export default InputNumber;