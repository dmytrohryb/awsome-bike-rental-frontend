import {BIKE_ADD_FORM_CHANGE_DATA} from "./actions";

const defaultState = {
    data: []
}

export const bikeAddFormReducer = (state = defaultState, action) => {
    switch (action.type){
        case BIKE_ADD_FORM_CHANGE_DATA:
            return {
                ...state,
                data: action.payload
            }
    }
    return state
}
