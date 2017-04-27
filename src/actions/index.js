import { GET_FEEDBACKS, CREATE_FEEDBACK, UPDATE_FEEDBACK} from './types';
import axios from 'axios';

// const API_URL = "http://localhost:5000/api/v1" ;
const API_URL = "https://desolate-dawn-81748.herokuapp.com/api/v1" ;

// Feedbacks functions
export function getFeedbacks(props){
	const request = axios.get(`${API_URL}/feedbacks`, props);  
	return {
		type: GET_FEEDBACKS,
		payload: request
	};
}

export function createFeedback(props){
	const request = axios.post(`${API_URL}/feedbacks`, props); 
	return {
		type: CREATE_FEEDBACK,
		payload: request
	};
}

export function updateFeedback(id, props){
	const request = axios.delete(`${API_URL}/feedbacks/${id}`, props); 	
	return {
		type: UPDATE_FEEDBACK,
		payload: request
	};
}

