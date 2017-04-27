import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFeedback} from '../actions/index';

import {Card, CardText} from 'material-ui/Card';

class Success extends Component{

	componentWillMount() {
		this.props.getFeedback(this.props.params.id);

	}
	render(){
		if(!this.props.feedback){
			return <div> No success for show </div>;
		}
		console.log("Feedback...",this.props.feedback)
		return(
			<div>
				<Card>
				    <CardText>
				     	{"Your request "+ this.props.feedback.id + " is created. We are waiting for you on "+ this.props.feedback.date + '.'}
				    </CardText>
			  </Card>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { feedback: state.feedbacks.feedback};
}

export default connect(mapStateToProps, {getFeedback})(Success);