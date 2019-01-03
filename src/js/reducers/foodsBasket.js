export const initialState = (() => {
  let basketFoods = [],
      basketFoodsLocalStorage;
      
  try {
    basketFoodsLocalStorage = JSON.parse(localStorage.getItem('basketFoods'));
  } catch(e) {}

  if(basketFoodsLocalStorage !== null && basketFoodsLocalStorage.length > 0) {
    basketFoods = basketFoodsLocalStorage;
  }

  return basketFoods;
})();

export default function basketFoodsReducers(state = initialState, action) {
  const { type, payload } = action;

  if(payload !== undefined) {
    const indexBasketFoods = state.findIndex(f => f.id === payload.id);

    switch(type) {
      case "FOOD_INCREASE":
        if(indexBasketFoods < 0) {
          const newFoodBasket = { id: payload.id, category: payload.category, count: 1 };

          return [...state, newFoodBasket];
        } else {
          state[indexBasketFoods].count = state[indexBasketFoods].count + 1;
          return state;
        }

      case "FOOD_DECREASE":
        const basketFood = state[indexBasketFoods];

        if(basketFood.count > 1) {
          state[indexBasketFoods].count = state[indexBasketFoods].count - 1;
        } else {
          state = state.filter((s, index) => index !== indexBasketFoods);
        }
        break;

      case "FOOD_DELETE": return state = state.filter((s, index) => index !== indexBasketFoods);
      case "FOOD_DELETE_ALL": return state = [];
      default: return state;
    }
  }

  return state;
}