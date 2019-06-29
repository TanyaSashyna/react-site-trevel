import * as types from "../actionTypes/actionTypes";

import { initialState } from "./initial-state";

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FROM_WHERE_SELECT: {
            const selindOne = action.payload.target.options.selectedIndex;
            const valueText = action.payload.target.options[selindOne].text;

            return {
                ...state,
                fromWhereVal: valueText,
                showSelect: action.payload.target.value !== 0 ? true : false,
                showAboutWay: false,
                openOrderForm: false,
                valueOne: action.payload.target.value,
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
            return { ...state, openOrderForm: !state.openOrderForm };
        }

        case types.GET_REQUEST: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS: {
            const data = action.payload;

            const nameWay = `${state.fromWhereVal} - ${state.whereVal}`;

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
            return { 
				...state, 
				showModalForm: false,
				showAboutWay: false,
				openOrderForm: false
			};
        }

        case types.CHANGE_VALUE_INPUT: {
            const regArr = state.regArr;
            const nameWay = `${state.fromWhereVal} - ${state.whereVal}`;

            const targetName = action.payload.target.name;
            const tagretVal = action.payload.target.value;
            const targetId = Number(action.payload.target.id);            

            let error = state.showError;
            let nameVal;

            if (targetName === 'firstName' || targetName === 'lastName') {
                const errorTrue = tagretVal.search(regArr[0]) !== 0;
                error[targetId] = errorTrue;
                nameVal = tagretVal;

            }  else if (targetName === 'phone') {

                const errorTrue = tagretVal.search(regArr[1]) !== 0;
                error[targetId] = errorTrue;
                nameVal = tagretVal;

            } else if (targetName === 'date' || targetName === 'number') {

                const errorTrue = tagretVal.search(regArr[2]) !== 0;
                error[targetId] = errorTrue;
                nameVal = tagretVal;

            }
            
            //console.log(state.userInfo);

            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    fromTo: nameWay,
                    [targetName]: nameVal ? nameVal : state.userInfo[targetName]
                },
                showError: error,
                disabled: state.showError.some(bool => bool === true)
            };
        }

        case types.POST_REQUEST: {
            return state;
        }

        case types.POST_REQUEST_SUCCESS: {
            //console.log(state.userInfo);

            return { ...state, showModalForm: true }
        }

        case types.POST_REQUEST_ERROR: {
            return state;
        }

        case types.RESET_VALUE_SELECT: {
            return {
                ...state,
                showSelect: false,
                valueOne: 0,
                valueTwo: 0
            }
        }

        default:
            return state;
    }
}