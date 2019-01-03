import '../setupTests'
import React from 'react'
import { ListBasketFoods } from '../src/js/containers/listBasketFoods';

describe('List basketFoods', () => {
  const props = {
          foods: [{
              id: 1,
              name: "Жар-Баран",
              description: "Пищевая ценность продукта на 100 г",
              category: "pizza",
              ingredients: [{ name: "Томатный соус", main_ingredient: true }],
              price: 845, 
              image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/49c9bd34-f725-400d-bca5-81e6c8bacc76.jpg",
            },
            {
              id: 2,
              name: "Сырный",
              description: "Пищевая ценность продукта на 100 г",
              category: "pizza",
              ingredients: [{ name: "Томатный соус", main_ingredient: true }],
              price: 845, 
              image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/49c9bd34-f725-400d-bca5-81e6c8bacc76.jpg",
            }
          ],
          basketFoods: [{ id: 1, count: 3 }, { id: 2, count: 1 }],
        },
        wrapper = shallow(<ListBasketFoods { ...props } />),
        itemBasket = 'li.item-basket',
        itemBasketFirst = wrapper.find(itemBasket).first();

  it('Snapshot Component list', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('Render two foods basket', () => {
    expect(wrapper.find(itemBasket)).toHaveLength(props.basketFoods.length);
  });

  it('Check whether the «key» contained the value of «id» food basket', () => {
    for(let i = 0; i < props.basketFoods.length; i++) {
      expect(wrapper
              .find(itemBasket)
              .at(i)
              .key()
      ).toEqual(String(props.basketFoods[i].id));
    }
  });
  
  it('Display of food basket images', () => {
    expect(itemBasketFirst
            .first()
            .find('img.image')
            .html()
    ).toEqual('<img class="image" src="' + props.foods[0].image + '" alt="' + props.foods[0].name + '"/>');
  });

  it('Display of food names', () => {
    expect(itemBasketFirst
            .find('div.product-basket')
            .find('div.name')
            .text()
    ).toEqual(props.foods[0].name);
  });

  it('Display of food basket prices', () => {
    expect(itemBasketFirst.find('div.price').text()
    ).toEqual(props.foods[0].price * props.basketFoods[0].count + ' ₽');
  });
});