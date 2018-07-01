import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';


const configureStore = () => (
  createStore(rootReducer, 
    applyMiddleware(thunkMiddleware)
   )
);

export default configureStore;
