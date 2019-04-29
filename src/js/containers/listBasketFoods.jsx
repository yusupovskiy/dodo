import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index'

import ButtonAddToBasket from '../components/buttonAddToBasket'

export class ListBasketFoods extends Component {
  showList() {
    if(this.props.basketFoods !== undefined && this.props.basketFoods.length > 0) {
      return this.props.basketFoods.map( basketFood => {
        const indexFood = this.props.foods.findIndex(f => f.id === basketFood.id);
        const food = this.props.foods[indexFood];

        return (
          <li key={ basketFood.id } className="item-basket">
            <div className="product-basket">
              <img className="image" src={ food.image } alt={ food.name } />
              <div>
                <div className="name">{ food.name }</div>
                <div className="desc">{ food.description }</div>
              </div>
            </div>
            <div className="product__count">{ <ButtonAddToBasket id={ basketFood.id } /> }</div>
            <div className="btn__close" onClick={ () => this.props.selectFood(basketFood, 'delete') }></div>
            <div className="price" title={ food.price * basketFood.count + ' ₽' }>{ food.price * basketFood.count } ₽</div>
          </li>
        );
      }); 
    }
    else {
      return (
        <div className="no-list-basket">Добавьте что-нибудь из меню</div>
      );
    }
  }

  totalPriceBasketFood() {
    return this.props.basketFoods.reduce((sum, food) => {
      const index = this.props.foods.findIndex(f => f.id === food.id),
                    food_price = this.props.foods[index].price;

      return sum + (food.count * food_price);
    }, 0);
  }

  render() {
    return (
      <section className="section-basket">
        <h3 className="title">Ваш заказ на { this.totalPriceBasketFood() } ₽</h3>
        <ul id="list" className="list-basket">
          { this.showList() }
        </ul>
        <hr />
      </section>
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
  return bindActionCreators({
    selectFood 
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ListBasketFoods);
