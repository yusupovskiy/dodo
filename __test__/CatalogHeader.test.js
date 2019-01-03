import '../setupTests'
import React from 'react'
import { CatalogHeader } from '../src/js/components/catalogHeader';

describe('Testion Component CatalogHeader', () => {
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
        wrapper = shallow(<CatalogHeader { ...props } />),
        totalCountAndPrice = props.basketFoods.reduce((sum, food) => {
          const index = props.foods.findIndex(f => f.id === food.id),
                foodPrice = props.foods[index].price;
    
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
  
  it('SNAPSHOT Component header catalog', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Check whether the PRICE for all ordered food is summed up', () => {
    expect(wrapper
            .find('div.short-info_total-price')
            .text()
    ).toEqual(totalCountAndPrice.price + ' ₽');
  });

  it('Check whether the COUNT for all ordered food is summed up', () => {
    expect(wrapper
            .find('div.short-info__count')
            .text()
    ).toEqual(totalCountAndPrice.count + ' товаров');
  });
});