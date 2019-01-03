export const selectFood = (food, action) => {
  let type;

  if(action === 'increase') 
    type = "FOOD_INCREASE";

  else if(action === 'decrease')
    type = "FOOD_DECREASE";

  else if(action === 'delete')
    type = "FOOD_DELETE";

  else if(action === 'delete_all')
    type = "FOOD_DELETE_ALL";
    
  return {
    type: type,
    payload: food
  }
};