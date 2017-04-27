import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {createFeedback, getFeedback} from '../actions/index';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class NewFeedback extends Component{
	onSubmit(data){
		const {createFeedback, getFeedback, reset} = this.props;
		var last_request_id = null;
		if(data.id_last_request){
				getFeedback(data.id_last_request).then((request) => {
				last_request_id = request.payload.data.id;
			});
		}

		return createFeedback(data).then((request) => {
			if (data.age < 17 || data.age > 65 || data.age == null) {
	      throw new SubmissionError({ age: 'Age must be from 17 to 65'})
	    } 
			if (data.name == null || !/([A-Z]+[a-z]{2,}\s[A-Z]+[a-z]{2,}$)/i.test(data.name)) {
	      throw new SubmissionError({ name: 'Name must be in the following format: Name Surname'})
	    } 
	    if (data.date == null) {
	      throw new SubmissionError({ date: 'This field is required'})
	    } 
	    if(data.id_last_request){
		    if (last_request_id == null) {
		      throw new SubmissionError({ id_last_request: 'This request does not exist'})
		    }
		  }
		  if(request.error){
				throw new SubmissionError({ _error: 'Form not send, something wrong!'})
			}
	    var id = request.payload.data.id;
			reset()
			browserHistory.push('/success/'+id);
		});
	 
	}

	render(){
		const {handleSubmit, error} = this.props;
		return(
			<div className="formFeedback">
				<h1>Form Feedback</h1>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div> 
	          <Field 
	          	name="age" 
	          	component={renderInput} 
	          	type="number" 
	          	label="Your age"
	          />
          </div>
					<div>
	          <Field 
	          	name="name" 
	          	component={renderInput} 
	          	type="text" 
	          	label="Your name"
	          />
          </div> 
          <div>
	          <Field 
	          	name="date" 
	          	component={renderInput} 
	          	type="date"
	          	label=" " 
	          />
          </div>
          <div> 
	          <Field 
	          	name="id_last_request" 
	          	component={renderInput} 
	          	type="text" 
	          	label="Last request id"
	          />
          </div> 
          <div>{error && <strong>{error}</strong>}</div>             
        	<FlatButton 
        		label="Send" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {createFeedback, getFeedback})(reduxForm({ form: 'NewFeedback' })(NewFeedback));