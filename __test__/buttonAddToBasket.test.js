import '../setupTests'
import React from 'react';

import { ButtonAddToBasket } from '../src/js/components/buttonAddToBasket';

describe('Testing the add food to basket button', () => {
  const foods = [{ id: 1, category: "pizza" }];

  it('The button in the shopping basket', () => {
    const MockSelectFood = jest.fn(),
          props = {
            id: 1,
            foods,
            basketFoods: [],
            selectFood: MockSelectFood,
          },
          enzymeWrapper = shallow(<ButtonAddToBasket { ...props } />);
          
    // expect(enzymeWrapper).toMatchSnapshot();
    enzymeWrapper.simulate('click');
    // expect(enzymeWrapper).toMatchSnapshot();
  });

  it(`Buttons to increase or decrease the count of foods, 
      if the basket has already added this food`, () => {
    const MockSelectFood = jest.fn(),
          props = {
            id: 1,
            foods,            
            basketFoods: [{ id: 1, count: 1 }],
            selectFood: MockSelectFood,
          },
          enzymeWrapper = shallow(<ButtonAddToBasket { ...props } />);

    // const AllReducers = combineReducers({
    //         foods: foods,
    //         basketFoods: [{ id: 1, count: 1 }],
    //         id: 1,
    //       }),
    //       store = createStore(AllReducers),
    //       enzymeWrapper = render(
    //         <Provider store={ store }>
    //           <ButtonAddToBasket />
    //         </Provider>
    //       );

    expect(enzymeWrapper).toMatchSnapshot();
    // enzymeWrapper.find('.btn__increase').simulate('click');
    // expect(enzymeWrapper).toMatchSnapshot();
  });
});