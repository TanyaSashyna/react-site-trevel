const menu = [
    { id: 1, path: "/", text: 'Главная' },
    { id: 2, path: "/about", text: 'О нас' },
    { id: 3, path: "/transfer", text: 'Трансфер' },
    { id: 4, path: "/contact", text: 'Контакты' }
];

const form = [
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
];

const regularArr = [
    /^[a-zA-Zа-яА-Я]+$/,
    /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    /[0-9]/
];

const contactInfo = [
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
];

const galleryPhoto = [
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/05/12/47/auto-2583303_960_720.jpg',
        alt: 'bus1',
        id: 1
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/05/12/36/auto-2583230_960_720.jpg',
        alt: 'bus2',
        id: 2
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/car-1284040_960_720.jpg',
        alt: 'bus3',
        id: 3
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/05/12/45/auto-2583292_960_720.jpg',
        alt: 'bus4',
        id: 4
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/05/12/46/auto-2583297_960_720.jpg',
        alt: 'bus5',
        id: 5
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/05/12/42/auto-2583266_960_720.jpg',
        alt: 'bus6',
        id: 6
    }
];

export const initialState = {
    menu: menu,
    contactInfo: contactInfo,
    dataForm: form,
    galleryPhoto: galleryPhoto,
    showModalForm: false,
    regArr: regularArr,
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
