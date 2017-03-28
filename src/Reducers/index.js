import {
    combineReducers
} from "redux";

const passwordType = (state, action) => {
    switch (action.type) {
        case "PASSWORD":
            return "password";
        case "TEXT":
            return "text"
        default:
            return state;
    }
}

export const reducres = combineReducers({
    passwordType
})