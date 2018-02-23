/*https://github.com/fedosejev/checkboxes-in-react/blob/master/source/js/components/Application.js*/
import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props){
        super(props);
        this.state={
            isChecked: false,
        }
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
  }
  

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;