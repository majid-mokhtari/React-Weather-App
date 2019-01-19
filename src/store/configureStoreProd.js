import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const middleware = [];
const enhancers = [];

middleware.push(thunk);

const history = createBrowserHistory({ basename: window.location.pathname });
const router = routerMiddleware(history);

middleware.push(router);

enhancers.push(applyMiddleware(...middleware));
const enhancer = compose(...enhancers);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
