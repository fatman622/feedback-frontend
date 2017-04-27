import {GET_FEEDBACKS, GET_FEEDBACK} from '../actions/types';

const INITIAL_STATE ={
	all: [], feeedback: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_FEEDBACKS:
			return {...state, all: action.payload.data} ;
		case GET_FEEDBACK:
			return {...state, feedback: action.payload.data} ;
		default:
			return state;
	}
}