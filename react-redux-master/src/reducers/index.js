import { combineReducers } from "redux";

const counter = (state=0,action) => {
    if (action.type === 'INCREMENT') {
        //This will increase the value of counter by the value passed to the increment method
        return state + action.inc;
    }
    // return current val of counter
    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;