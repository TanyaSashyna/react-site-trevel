import { combineReducers } from "redux";

import counter from "./todo";
import burgerBtn from "./burger-btn";

export default combineReducers({
    counter,
    burgerBtn
});