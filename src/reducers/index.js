import {combineReducers} from 'redux';
import FeedbacksReducer from './feedbacks_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	feedbacks: FeedbacksReducer,
	form: formReducer
});

export default allReducers
