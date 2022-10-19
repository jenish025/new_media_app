import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducer/Index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
