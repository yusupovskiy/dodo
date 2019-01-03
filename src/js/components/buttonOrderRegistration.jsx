import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index'

export class ButtonOrderRegistration extends Component {
  orderRegistration() {
    this.props.selectFood({}, 'delete_all');
    alert("Спасибо за заказ, ожидайте!");
  }

  render() {
    if(this.props.basketFoods.length > 0) {
      return (
        <Link onClick={ () => { this.orderRegistration() } } to="/" className="btn">Оформить заказ</Link>
      );
    } else return (<div></div>);
  }
}

function mapStateToProps(state) {
  return {
    basketFoods: state.basketFoods,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    selectFood 
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ButtonOrderRegistration);