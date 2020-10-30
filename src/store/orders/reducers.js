import {ORDERS_CHANGE_DATA} from "./actions";

const defaultState = {
    data: []
}

export const ordersReducer = (state = defaultState, action) => {
    switch (action.type){
        case ORDERS_CHANGE_DATA:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}
