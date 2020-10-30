import {AVAILABLE_BIKES_CHANGE_DATA} from "./actions";

const defaultState = {
    data: []
}

export const availableBikesReducer = (state = defaultState, action) => {
    switch (action.type){
        case AVAILABLE_BIKES_CHANGE_DATA:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}
