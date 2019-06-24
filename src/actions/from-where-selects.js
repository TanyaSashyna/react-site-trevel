import * as types from "../actionTypes/actionTypes";

export const fromWhereSelect = payload => ({
    type: types.FROM_WHERE_SELECT,
    payload
});

export const whereSelect = payload => ({
    type: types.WHERE_SELECT,
    payload
});

const getRequest = payload => ({
    type: types.GET_REQUEST,
    payload
});

const getRequestSuccess = payload => ({
    type: types.GET_REQUEST_SUCCESS,
    payload
});

const getRequestError = payload => ({
    type: types.GET_REQUEST_ERROR,
    payload
});

export const getPosts = () => {
    return dispatch => {
        let promise = fetch("https://dbjson-30815.firebaseio.com/aboutWay.json")

        dispatch(getRequest())

        promise.then(
            data => data.json().then(data => dispatch(getRequestSuccess(data))),
            error => dispatch(getRequestError(error))
        )
    }
}