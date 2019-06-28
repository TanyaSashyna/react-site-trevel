export const initialState = {
    dataForm: [
        {
            type: 'text',
            name: 'firstName',
            placeholder: 'Имя',
            errorText: 'Введите имя',
            labelText: 'Имя',
            id: 1
        },
         {
            type: 'text',
            name: 'lastName',
            placeholder: 'Фамилия',
            errorText: 'Введите имя',
            labelText: 'Фамилия',
            id: 2
        },
        {
            type: 'phone',
            name: 'phone',
            placeholder: 'Телефон',
            errorText: 'Введите номер телефона',
            labelText: 'Телефон',
            id: 3
        },
        {
            type: 'date',
            name: 'date',
            placeholder: 'Дата отправления',
            errorText: 'Введите дату',
            className: 'date',
            labelText: 'Дата',
            id: 4
        },
        {
            type: 'text',
            name: 'number',
            placeholder: '0',
            errorText: 'Не корректное количество мест',
            labelText: 'Количество мест',
            id: 5
        }
    ],
    showModalForm: false,
    userInfo: {
        fromTo: '',
        firstName: '',
        lastName: '',
        phone: '',
        date: '',
        number: ''
    },
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
