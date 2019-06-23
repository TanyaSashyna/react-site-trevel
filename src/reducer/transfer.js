import * as types from "../actionTypes/actionTypes";

const initialState = {
    fromWhereArr: ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'],
    whereArrOne: ['Выберите город', 'Харьков'],
    whereArrTwo: ['Выберите город', 'Кириловка', 'Скадовск', 'Лазурное'],
    showSelect: false,
    fromWhereVal: '',
    whereVal: '',
    valueTwo: 0,
    showAboutWay: false,
    openOrderForm: false,
    aboutWay: {}
};

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
            return { ...state, openOrderForm: !state.openOrderForm };
        }

        case types.GET_REQUEST: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS: {
            const data = action.payload;
            console.log(data);

            const nameWay = `${state.fromWhereVal} - ${state.whereVal}`
            console.log(nameWay);

            return {
                ...state,
                aboutWay: data[nameWay]
            }

            //return state
        }

        case types.GET_REQUEST_ERROR: {
            return state;
        }

        default:
            return state;
    }
}