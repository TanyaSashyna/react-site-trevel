import * as types from "../actionTypes/actionTypes";

const initialState = {
    showModalForm: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL: {
            return { ...state, showModalForm: !state.showModalForm };
        }

        default:
            return state;
    }
}