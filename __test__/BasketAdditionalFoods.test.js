import '../setupTests'
import React from 'react';

import { BasketAdditionalFoods } from '../src/js/components/basketAdditionalFoods';

describe('Testion Component CatalogHeader', () => {
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
              name: "Бон Аква газ, 0,5 л",
              description: "Пищевая ценность продукта на 100 г",
              category: "drink",
              ingredients: [{ name: "Томатный соус", mainIngredient: true }],
              price: 85, 
              image: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/49c9bd34-f725-400d-bca5-81e6c8bacc76.jpg",
            }
          ],
          // basketFoods: [{ id: 1, count: 3 }, { id: 2, count: 1 }],
          basketFoods: [],
          additionalSections: [
            { id: 1, title: 'Рекомендуем попробовать', category: 'pizza' },
            { id: 2, title: 'Напитки', category: 'drink' },
          ],
        },
        wrapper = shallow(<BasketAdditionalFoods { ...props } />);
  
  it('SNAPSHOT Component BasketAdditionalFoods', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Display of food TITLE section', () => {
    expect(wrapper
            .find('section.section-basket')
            .first()
            .find('h3.title')
            .text()
    ).toEqual(props.additionalSections[0].title);
  });

  it('Display of food TITLE section', () => {
    const idSection = parseInt(wrapper
                .find('section.section-basket')
                .at(0)
                .key()),
          additionalSection = props.additionalSections.find(s => s.id === idSection),
          idFood = parseInt(wrapper
            .find('section.section-basket')
            .first()
            .find('li.item-additional-produc')
            .at(0)
            .key()),
          food = props.foods.find(f => f.id === idFood);
          
    expect(additionalSection.category).toEqual(food.category);
  });

  it('RENDER two additional sections', () => {
    expect(wrapper.find('ul.box-additional-produc')).toHaveLength(props.foods.length);
  });

  it(`RENDERD one additional section because 
      the basket already has food from the second`, () => {
    props.basketFoods.push({ id: 1, count: 3 });
    const itemLength = props.foods.length - props.basketFoods.length,
          wrapper = shallow(<BasketAdditionalFoods { ...props } />);
    
    expect(wrapper.find('ul.box-additional-produc')).toHaveLength(itemLength);
  });
});