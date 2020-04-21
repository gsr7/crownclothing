import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))



export default store;


{/* The middleware, the store is expecting from redux is array - function putting in arrya
  - ...middlewares spreads all the values of [logger] into the function of applyMiddleware as a individual arguments. we can add more values to [logger] (3.14/ 7.setting up Redux2)

   */}