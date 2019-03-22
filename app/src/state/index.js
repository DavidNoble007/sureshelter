import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import modal from "./modal/reducer";
import auth from "./auth/reducer";
import count from "./count/reducer";

const rootReducer = combineReducers({
  auth,
  modal,
  count
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
