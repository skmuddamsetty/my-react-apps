import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters';
import { carsReducer } from '../reducers/car-comparator';

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      cars: carsReducer
    })
  );
  return store;
};
