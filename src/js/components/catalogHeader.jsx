import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CatalogHeader extends Component {
  shortInfo() {
    const totalCountAndPrice = this.props.basketFoods.reduce((sum, food) => {
      const index = this.props.foods.findIndex(f => f.id === food.id),
            foodPrice = this.props.foods[index].price;

      if(sum <= 0) {
        sum = {
          count: food.count,
          price: (foodPrice * food.count)
        }
      }
      else {
        sum = {
          count: sum.count + food.count,
          price: sum.price + (foodPrice * food.count)
        }
      }

      return sum;
    }, 0);

    if(totalCountAndPrice !== 0) {
      return (
        <div className="short-info" onClick={ this.showBasket }>
          <div className="short-info_total-price">{ totalCountAndPrice.price } ₽</div>
          <div className="short-info__count">{ totalCountAndPrice.count } товаров</div>
        </div>
      );
    }
  }

  render() {
    return (
      <header>
        <a className="logo" href="/">
          <img src="https://dodopizza-a.akamaihd.net/site-static/dist/custom/8dbd4d5523ca05b07470.svg" />
        </a>

        <div className="menu">
          <a href="#pizza" className="item-menu">Пицца</a>
          <a href="#snacks" className="item-menu">Закуски</a>
          <a href="#desserts" className="item-menu">Десерты</a>
          <a href="#drink" className="item-menu">Напитки</a>
        </div>

        <Link className="btn__button" to="/basket" onClick={ this.showBasket }>Корзина</Link>

        { this.shortInfo() }
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods,
    basketFoods: state.basketFoods,
  };
}

export default connect(mapStateToProps)(CatalogHeader);
