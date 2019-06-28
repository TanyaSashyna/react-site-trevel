import * as types from "../actionTypes/actionTypes";

const initialState = {
  contactInfo = [
    {
      id: 1,
      classIcon: 'fas fa-mobile-alt',
      contactName: 'Телефон',
      scheduleText: '(099) 000 00 00'
    },
    {
      id: 2,
      classIcon: 'fas fa-envelope',
      contactName: 'E-mail',
      scheduleText: 'travel@gmail.com'
    },
    {
      id: 3,
      classIcon: 'fas fa-map-marker-alt',
      contactName: 'Адрес',
      scheduleText: 'г. Харьков, Павловская площадь, д.6, метро пл.Конституции'
    },
    {
      id: 4,
      classIcon: 'fas fa-clock',
      contactName: 'Время работы офиса',
      scheduleText: '09:00 - 19:00 Пн-Вс'
    }
  ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CONTACT_INFO: {
            return ...state
        }
        default:
            return state;
    }
}
