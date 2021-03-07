import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers/rootReducer';

const configStore = (initialState) => {
  const enhancersComposition = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
  const enhancer = enhancersComposition(applyMiddleware(thunk));
  
  return createStore(rootReducer, initialState, enhancer);
}

export default configStore;