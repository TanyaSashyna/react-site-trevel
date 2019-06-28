import * as types from "../actionTypes/actionTypes";

const initialState = {
  menu: [
      { id: 1, path: "/", text:'Главная'},
      { id: 2, path: "/about", text:'О нас' },
      { id: 3, path: "/transfer", text:'Трансфер' },
      { id: 4, path: "/contact", text:'Контакты' }
  ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.MAIN_MENU: {
            return ...state
        }
        default:
            return state;
    }
}
