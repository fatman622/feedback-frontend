import { GET_FEEDBACKS, CREATE_FEEDBACK, GET_FEEDBACK} from './types';
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

export function createFeedback(data){
	const props = new FormData();
	props.append('age', data.age);
	props.append('name', data.name);
	props.append('date', data.date);
	props.append('id_last_request', data.id_last_request);
	console.log ("Data from index", data)
	if(data.attachment){
		props.append('attachment', data.attachment[0]);
	}
	const request = axios.post(`${API_URL}/feedbacks`, props); 
	return {
		type: CREATE_FEEDBACK,
		payload: request
	};
}


export function getFeedback(id){
	const request = axios.get(`${API_URL}/feedbacks/${id}`); 	
	return {
		type: GET_FEEDBACK,
		payload: request
	};
}
