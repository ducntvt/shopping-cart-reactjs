import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './../components/Message';

class MessageContainer extends Component {
	render() {
		return (
			<Message>{this.props.message}</Message>
		);
	}
}

MessageContainer.propTypes= {
	message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
	return {
		message : state.message
	};
}
const mapDispatchToProps = (dispatch, action) => {
	return {

	};
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);
