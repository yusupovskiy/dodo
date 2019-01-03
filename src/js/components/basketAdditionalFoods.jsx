import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index'

export class BasketAdditionalFoods extends Component {
  itemAdditionalGoods(foods) {
    return foods.map(food => {
      return (
        <li key={ food.id } className="item-additional-produc">
          <div className="product-additional-produc">
            <img className="image-additional-produc" src={ food.image } alt=" " />
            <div className="name-additional-produc">
              { food.name }<br />
              { food.price } ₽<br />
              <div className="btn__button" onClick={ () => this.props.selectFood(food, 'increase') }>В корзину</div>
            </div>
          </div>
        </li>
      );
    });
  }

  additionalFoods(section) {
    const foodsFilt = this.props.foods.filter(f => {
      const indexBaskerFood = this.props.basketFoods.findIndex(bf => bf.id === f.id);

      if(indexBaskerFood < 0 && f.category === section.category)
        return f;
    });

    if(foodsFilt.length > 0) {
      return (
        <section className="section-basket" key={ section.id }>
          <h3 className="title">{ section.title }</h3>

          <div className="additional-product cool-scrollbar">
            <ul className="box-additional-produc">

              { this.itemAdditionalGoods(foodsFilt) }

            </ul>
          </div>
        </section>
      );
    }
  }

  render() {
    return (
      <div className="additional-foods">
        { 
          this.props.additionalSections.map(s => {
            return this.additionalFoods(s);
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods,
    basketFoods: state.basketFoods,
    additionalSections: [
      { id: 1, title: 'Рекомендуем попробовать', category: 'pizza' },
      { id: 2, title: 'Напитки', category: 'drink' },
      { id: 3, title: 'Соусы', category: 'snacks' },
      { id: 4, title: 'Десерты', category: 'desserts' },
    ],
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectFood
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BasketAdditionalFoods);