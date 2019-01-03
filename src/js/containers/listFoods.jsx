import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonAddToBasket from '../components/buttonAddToBasket'

export class ListFoods extends Component {
  showList(category) {
    return this.props.foods.map( food => {
      if(food.category === category) {
        return (
          <div className="food" key={ food.id }>
            <div className="food__image"><img src={ food.image } alt={ food.name } /></div>
            <div className="food__name">{ food.name }</div>
            <div className="food__ingredients">
              {
                food.ingredients.map( (ingredient, index) => {
                  return (
                    <div key={ index } className="food__ingredient">{ ingredient.name }</div>
                  );
                })
              }
            </div>
            <div className="product__cart">
              <div className="product__cart__price">{ food.price } ₽</div>
              { <ButtonAddToBasket id={ food.id } /> }            
            </div>
          </div>
        );
      }
    }); 
  }

  blockWithList(title, category) {
    return (
      <div id={ category } className="foods">
        <h2 className="foods_title">{ title }</h2>
        <div className="foods_container">
          { this.showList(category) }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="content">
        { this.blockWithList('Пицца', 'pizza') }
        { this.blockWithList('Закуски', 'snacks') }
        { this.blockWithList('Десерты', 'desserts') }
        { this.blockWithList('Напитки', 'drink') }
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

export default connect(mapStateToProps)(ListFoods);