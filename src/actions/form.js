import * as types from "../actionTypes/actionTypes";

export const modalForm = () => ({
    type: types.SHOW_MODAL
});

export const onChangeValue = payload => ({
    type: types.CHANGE_VALUE_INPUT,
    payload
});

const postRequest = payload => ({
    type: types.POST_REQUEST,
    payload
});

const postRequestSuccess = payload => ({
    type: types.POST_REQUEST_SUCCESS,
    payload
});

const postRequestError = payload => ({
    type: types.POST_REQUEST_ERROR,
    payload
});

export const createPost = payload => {
    return dispatch => {
        let promise = fetch("https://dbjson-30815.firebaseio.com/travelList.json",
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )

        dispatch(postRequest())

        promise.then(
            data => data.json().then(data => dispatch(postRequestSuccess(data))),
            error => dispatch(postRequestError(error))
        )
    }
};
