import * as types from './../constants/ActionType' ;
import * as notifications from './../constants/Message' ;

let initState = notifications.MSG_WELCOME;

const message = (state = initState, action) =>  {

    switch (action.type) {
        case types.CHANGE_ME:
            return action.message;
        default:
            return [...state];
    }
}


export default message;