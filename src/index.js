import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./style.scss";

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import App from './router';

import * as serviceWorker from './serviceWorker';

import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Sidebar />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* https://panch.com.ua
хедер и футер

страницы: 
    1.главная:
        - большая картинка с инфой
        - РЕГУЛЯРНЫЕ МАРШРУТЫ - ввиде картинок,без переходов
    2. О нас
    3. Контакты
    4. Пассажирские перевозки
*/
