import * as types from "../actionTypes/actionTypes";

const initialState = {
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE: {
            return { ...state, count: state.count + 1 };
        }

        case types.DECREASE: {
            return { ...state, count: state.count - 1 };
        }
        default:
            return state;
    }
}