import { combineReducers } from "redux";
import burgerBtn from "./burger-btn";
import transfer from "./transfer";
import addGalleryPhoto from "./add-gallery-photo";
import addContactInfo from "./add-contact-info";

export default combineReducers({
    burgerBtn,
    transfer,
    addGalleryPhoto,
    addContactInfo
});
