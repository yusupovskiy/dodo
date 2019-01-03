import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import FoodsReducers from './foods';
import BasketFoodsReducers from './foodsBasket';

const allReducers = combineReducers({
  routing: routerReducer,
  foods: FoodsReducers,
  basketFoods: BasketFoodsReducers,
});

export default allReducers;