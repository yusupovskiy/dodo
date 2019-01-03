import reducerFoodsBasket, { initialState } from '../src/js/reducers/foodsBasket';

describe('Reducer foods', () => {
  // пока нечего тестировать
});

describe('Reducer basket foods', () => {
  it('FOOD_INCREASE: adding a food basket', () => {
    expect(initialState).toEqual([]);
  });

  it('FOOD_INCREASE: adding a food basket', () => {
    const state = [];
    const action = {
      type: 'FOOD_INCREASE',
      payload: { id: 1 }
    };

    expect(reducerFoodsBasket(state, action)).toEqual(
      [{ id: 1, count: 1 }]
    );
  });

  it('FOOD_INCREASE: increases count food basket', () => {
    const state = [{ id: 1, count: 1 }];
    const action = {
      type: 'FOOD_INCREASE',
      payload: { id: 1 }
    };
    
    expect(reducerFoodsBasket(state, action)).toEqual(
      [{ id: 1, count: 2 }]
    );
  });

  it('FOOD_DECREASE: excluding food from basket', () => {
    const state = [
      { id: 1, count: 2 }, 
      { id: 2, count: 1 }
    ];
    const action = {
      type: 'FOOD_DECREASE',
      payload: { id: 2 }
    };
    
    expect(reducerFoodsBasket(state, action)).toEqual(
      [{ id: 1, count: 2 }]
    );
  });

  it('FOOD_DECREASE: decreases count food basket', () => {
    const state = [{ id: 1, count: 2 }];
    const action = {
      type: 'FOOD_DECREASE',
      payload: { id: 1 }
    };
    
    expect(reducerFoodsBasket(state, action)).toEqual(
      [{ id: 1, count: 1 }]
    );
  });

  it('FOOD_DELETE', () => {
    const state = [
      { id: 1, count: 4 }, 
      { id: 2, count: 2 }
    ];
    const action = {
      type: 'FOOD_DELETE',
      payload: { id: 1 }
    };
    
    expect(reducerFoodsBasket(state, action)).toEqual(
      [{ id: 2, count: 2 }]
    );
  });

  it('FOOD_DELETE_ALL', () => {
    const state = [];
    const action = {
      type: 'FOOD_DELETE_ALL',
      payload: [
        { id: 1 }
      ]
    };

    expect(reducerFoodsBasket(state, action)).toEqual([]);
  });
  
  it('default', () => {
    const state = [];
    const action = {
      type: '',
      payload: []
    };

    expect(reducerFoodsBasket(state, action)).toEqual([]);
  });
});