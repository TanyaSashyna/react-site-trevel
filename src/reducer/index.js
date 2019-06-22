import { combineReducers } from "redux";
import burgerBtn from "./burger-btn";
import modalForm from "./modal-form";
import orderForm from "./open-order-form";

export default combineReducers({
    burgerBtn,
    modalForm,
    orderForm
});