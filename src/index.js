import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./style.scss";

import MenuMob from './components/menuMob/MenuMob';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import App from './router';

import * as serviceWorker from './serviceWorker';

import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <MenuMob />
            <App />
            <Footer/>
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
    3. Пассажирские перевозки
    4. Контакты

*/
