import * as msg from './../constants/Message';
import * as Types from './../constants/ActionType';
var initialState = msg.MSG_WELCOME;

const message = (state= initialState, action) => {
	switch(action.type){
		case Types.CHANGE_MSG:
			return action.message;
		default:
			return state;
	}
}

export default message;

