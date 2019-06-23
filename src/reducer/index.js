import { combineReducers } from "redux";
import burgerBtn from "./burger-btn";
import modalForm from "./modal-form";
import transfer from "./transfer";

export default combineReducers({
    burgerBtn,
    modalForm,
    transfer
});