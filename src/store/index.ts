import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import albumsReducer from '../reducers/albums';
import artistsReducer from '../reducers/artists';
import registerSagas from '../sagas/registerSagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = [applyMiddleware(sagaMiddleware)];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const reducers = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
});

const store = createStore(reducers, compose(...enhancers));

registerSagas(sagaMiddleware);

export default store;