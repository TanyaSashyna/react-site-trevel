import * as types from "../actionTypes/actionTypes";

import { initialState } from "./initial-state";

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FROM_WHERE_SELECT: {
            const selindOne = action.payload.target.options.selectedIndex;
            const valueOne = action.payload.target.options[selindOne].text;

            return {
                ...state,
                fromWhereVal: valueOne,
                showSelect: action.payload.target.value !== 0 ? true : false,
                showAboutWay: false,
                openOrderForm: false,
                valueTwo: 0,
                whereVal: ''
            };
        }

        case types.WHERE_SELECT: {
            const selindTwo = action.payload.target.options.selectedIndex;
            const valueTwo = action.payload.target.options[selindTwo].text;

            return {
                ...state,
                whereVal: valueTwo,
                showAboutWay: action.payload.target.value !== 0 ? true : false,
                valueTwo: action.payload.target.value
            };
        }

        case types.OPEN_ORDER_FORM: {
            //console.log(state);
            return { ...state, openOrderForm: !state.openOrderForm };
        }

        case types.GET_REQUEST: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS: {
            const data = action.payload;
            //console.log(data);

            const nameWay = `${state.fromWhereVal} - ${state.whereVal}`
            //console.log(nameWay);

            return {
                ...state,
                aboutWay: data[nameWay],
                nameWay: nameWay
            }
        }

        case types.GET_REQUEST_ERROR: {
            return state;
        }

        case types.SHOW_MODAL: {
            return { ...state, showModalForm: false };
        }

        case types.CHANGE_VALUE_INPUT: {
            const nameWay = `${state.fromWhereVal} - ${state.whereVal}`

            const firstNameVal = action.payload.target.name === 'firstName' ?
                action.payload.target.value :
                state.userInfo.firstName;

            const lastNameVal = action.payload.target.name === 'lastName' ?
                action.payload.target.value :
                state.userInfo.lastName;

            const phoneVal = action.payload.target.name === 'phone' ?
                action.payload.target.value :
                state.userInfo.phone;

            const dateVal = action.payload.target.name === 'date' ?
                action.payload.target.value :
                state.userInfo.date;

            const numberVal = action.payload.target.name === 'number' ?
                action.payload.target.value :
                state.userInfo.number;

            //console.log(state);

            return {
                ...state,
                userInfo: {
                    fromTo: nameWay,
                    firstName: firstNameVal,
                    lastName: lastNameVal,
                    phone: phoneVal,
                    date: dateVal,
                    number: numberVal
                }
            };
        }

        case types.POST_REQUEST: {
            return state;
        }

        case types.POST_REQUEST_SUCCESS: {
            console.log(state.userInfo);

            return { ...state, showModalForm: true }
        }

        case types.POST_REQUEST_ERROR: {
            return state;
        }

        default:
            return state;
    }
}