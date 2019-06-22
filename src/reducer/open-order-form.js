import * as types from "../actionTypes/actionTypes";

const initialState = {
    openOrderForm: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_ORDER_FORM: {
            return { ...state, openOrderForm: !state.openOrderForm };
        }

        default:
            return state;
    }
}