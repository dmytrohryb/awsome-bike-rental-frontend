import {combineReducers} from "redux";
import {availableBikesReducer} from './availableBikes/reducers';
import {bikeAddFormReducer} from "./bikeAddForm/reducers";
import {ordersReducer} from "./orders/reducers";
import {totalRentReducer} from './totalRent/reducers';

export default combineReducers({
    availableBikes: availableBikesReducer,
    orders: ordersReducer,
    bikeAddForm: bikeAddFormReducer,
    totalRent: totalRentReducer
})
