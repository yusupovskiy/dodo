import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index'

import ListBasketFoods from '../containers/listBasketFoods';
import BasketAdditionalFoods from './basketAdditionalFoods';
import ButtonOrderRegistration from './buttonOrderRegistration';

class Basket extends Component {
  render() {
    return (
      <div id="open-basket" className="open-basket">
        <div className="panel-basket">
          <Link to="/" className="back"></Link>
          <h2 className="title title-main">Корзина</h2>
          <div id="basket" className="basket cool-scrollbar">
            <div className="list">
              <ListBasketFoods />
              <BasketAdditionalFoods />

            </div>
          </div>

          <ButtonOrderRegistration />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods,
    basketFoods: state.basketFoods,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectFood: selectFood }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Basket);