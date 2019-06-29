export const initialState = {
    dataForm: [
        {
            type: 'text',
            name: 'firstName',
            placeholder: 'Имя',
            errorText: 'Введите имя',
            labelText: 'Имя',
            id: 0
        },
         {
            type: 'text',
            name: 'lastName',
            placeholder: 'Фамилия',
            errorText: 'Введите имя',
            labelText: 'Фамилия',
            id: 1
        },
        {
            type: 'phone',
            name: 'phone',
            placeholder: 'Телефон',
            errorText: 'Введите номер телефона',
            labelText: 'Телефон',
            id: 2
        },
        {
            type: 'date',
            name: 'date',
            placeholder: 'Дата отправления',
            errorText: 'Введите дату',
            className: 'date',
            labelText: 'Дата',
            id: 3
        },
        {
            type: 'text',
            name: 'number',
            placeholder: '0',
            errorText: 'Не корректное количество мест',
            labelText: 'Количество мест',
            id: 4
        }
    ],
    showModalForm: false,
    regArr: [
        /^[a-zA-Zа-яА-Я]+$/,
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        /[0-9]/
    ],
    showError: [false, false, false, true, true],
    disabled: true,
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
    valueOne: 0,
    valueTwo: 0,
    showAboutWay: false,
    openOrderForm: false,
    aboutWay: {}
};
