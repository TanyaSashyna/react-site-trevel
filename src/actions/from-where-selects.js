import * as types from "../actionTypes/actionTypes";

export const fromWhereSelect = payload => ({
    type: types.FROM_WHERE_SELECT,
    payload
});

export const whereSelect = payload => ({
    type: types.WHERE_SELECT,
    payload
});