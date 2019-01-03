import '../setupTests'
import React from 'react'
import { ListFoods } from '../src/js/containers/listFoods';

describe('List foods', () => {
  const props = {
          foods: [{
              id: 1,
              name: "Жар-Баран",
              description: "Пищевая ценность продукта на 100 г",
              category: "pizza",
              ingredients: [{ name: "Томатный соус", mainIngredient: true }],
              price: 845, 
              image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/49c9bd34-f725-400d-bca5-81e6c8bacc76.jpg",
            },
            {
              id: 2,
              name: "Сырный",
              description: "Пищевая ценность продукта на 100 г",
              category: "pizza",
              ingredients: [{ name: "Томатный соус", mainIngredient: true }],
              price: 845, 
              image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/49c9bd34-f725-400d-bca5-81e6c8bacc76.jpg",
            }
          ],
          basketFoods: [],
        },
        wrapper = shallow(<ListFoods { ...props } />),
        itemFood = 'div.food',
        itemFoodFirst = wrapper.find(itemFood).first();

  it('SNAPSHOT Component list', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('RENDER two foods', () => {
    expect(wrapper.find(itemFood)).toHaveLength(props.foods.length);
  });

  it('Check whether the KEY contained the value of ID food', () => {
    for(let i = 0; i < props.foods.length; i++) {
      expect(wrapper
              .find(itemFood)
              .at(i)
              .key()
      ).toEqual(String(props.foods[i].id));
    }
  });
  
  it('Display of food IMAGES', () => {
    expect(itemFoodFirst
            .find('div.food__image')
            .find('img')
            .html()
    ).toEqual('<img src="' + props.foods[0].image + '" alt="' + props.foods[0].name + '"/>');
  });

  it('Display of food NAMES', () => {
    expect(itemFoodFirst
            .find('div.food__name')
            .text()
    ).toEqual(props.foods[0].name);
  });

  it('Display of food PRICES', () => {
    expect(itemFoodFirst
            .find('div.product__cart')
            .find('div.product__cart__price').text()
    ).toEqual(props.foods[0].price + ' ₽');
  });
});