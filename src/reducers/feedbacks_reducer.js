import {GET_FEEDBACKS} from '../actions/types';

const INITIAL_STATE ={
	all: []
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_FEEDBACKS:
			return {...state, all: action.payload.data} ;
		default:
			return state;
	}
}