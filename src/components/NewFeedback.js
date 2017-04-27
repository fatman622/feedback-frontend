import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {createFeedback} from '../actions/index';
import {connect} from 'react-redux';

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
		data.date = "2017-04-29T21:00:00.000Z";
		console.log("Data",data)
		const {createFeedback, reset} = this.props;
		return createFeedback(data).then(() => {
			if (data.age == null) {
	      throw new SubmissionError({ age: 'This field is required'})
	    } 
			if (data.name == null) {
	      throw new SubmissionError({ name: 'This field is required'})
	    } 
			reset()
		});
	 
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
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


export default connect(null, {createFeedback: createFeedback})(reduxForm({ form: 'NewFeedback' })(NewFeedback));