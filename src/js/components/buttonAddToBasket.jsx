import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index'

export class ButtonAddToBasket extends Component {
  render() {
    const id = this.props.id,
          indexBasketFood = this.props.basketFoods.findIndex(bf => bf.id === id),
          basketFood = this.props.basketFoods[indexBasketFood];

    if(basketFood !== undefined && basketFood.count > 0) {
      return(
        <div className="panel__count">
          <div className="btn__decrease btn__count" onClick={ () => this.props.selectFood(basketFood, 'decrease') }>-</div>
          <div className="text__count">{ basketFood.count }</div>
          <div className="btn__increase btn__count" onClick={ () => this.props.selectFood(basketFood, 'increase') }>+</div>
        </div>
      ); 
    }
    else {
      const food = this.props.foods.find(f => f.id === id);

      return(
        <div className="btn__button" onClick={ () => this.props.selectFood(food, 'increase') }>В корзину</div>
      ); 
    }
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods,
    basketFoods: state.basketFoods,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    selectFood
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ButtonAddToBasket);