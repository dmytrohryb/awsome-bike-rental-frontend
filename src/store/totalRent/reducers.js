import {TOTAL_RENT_CHANGE_DATA} from "./actions";

const defaultState = {
    data: 0
}

export const totalRentReducer = (state = defaultState, action) => {
    switch (action.type){
        case TOTAL_RENT_CHANGE_DATA:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}
