import '../setupTests'
import React from 'react';

import { ButtonOrderRegistration } from '../src/js/components/buttonOrderRegistration';

describe('Button order registration', () => {
  it('The button in the shopping basket', () => {
    const props = { 
            id: 1, 
            basketFoods: [],
          },
          enzymeWrapper = shallow(<ButtonOrderRegistration {...props} />);
          
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it(`Buttons to increase or decrease the count of foods, 
      if the basket has already added this food`, () => {
    window.alert = jest.fn();
    const MockSelectFood = jest.fn(),
          props = { 
            id: 1, 
            basketFoods: [{ id: 1, count: 1 }],
            selectFood: MockSelectFood,
          },
          enzymeWrapper = shallow(<ButtonOrderRegistration {...props} />);

    expect(enzymeWrapper).toMatchSnapshot();
    enzymeWrapper.simulate('click');
    expect(MockSelectFood).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Спасибо за заказ, ожидайте!');
  });
  
});