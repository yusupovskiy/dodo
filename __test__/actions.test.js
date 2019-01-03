import { selectFood } from '../src/js/actions/index';

describe('selectFood actions', () => {
  it('increase', () => {
    const food = { id: 1 };
    const action = 'increase';

    expect(selectFood(food, action)).toEqual({
      type: 'FOOD_INCREASE',
      payload: { id: 1 }
    });
  });

  it('decrease', () => {
    const food = { id: 1 };
    const action = 'decrease';

    expect(selectFood(food, action)).toEqual({
      type: 'FOOD_DECREASE',
      payload: { id: 1 }
    });
  });

  it('delete', () => {
    const food = { id: 1 };
    const action = 'delete';

    expect(selectFood(food, action)).toEqual({
      type: 'FOOD_DELETE',
      payload: { id: 1 }
    });
  });

  it('delete_all', () => {
    const food = { id: 1 };
    const action = 'delete_all';

    expect(selectFood(food, action)).toEqual({
      type: 'FOOD_DELETE_ALL',
      payload: { id: 1 }
    });
  });
});