// redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
});

const store = createStore(rootReducer);

export default store;
