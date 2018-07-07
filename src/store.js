import {createStore} from 'redux';
import rootReducer from './modules/root.reducer';


export default function configureStore(initialState) {
    console.log(createStore(rootReducer, initialState));
    return createStore(rootReducer, initialState);
}