import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';
import * as msg from './../constants/Message';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

class CartContainer extends Component {
	render() {
		var {cart} = this.props;
		return (
			<Cart>
				{this.showCartItem(cart)}
				{this.showCartResult(cart)}
			</Cart>
		);
	}

	showCartItem = (cart) => {
		var result = <tr><td>{msg.MSG_CART_EMPTY}</td></tr>;
		if (cart.length > 0) {
			result = cart.map((cartItem, index)=>{
				return <CartItem  
							cartItem={cartItem} 
							key={index} 
							onDeleteProductInCart={this.props.onDeleteProductInCart}
							onChangeMsg={this.props.onChangeMsg}
							onUpdateProductInCart={this.props.onUpdateProductInCart}
						/>
			});
		}
		return result;
	}

	showCartResult = (cart) => {
		var result = null;
		if (cart.length > 0) {
			result = <CartResult  cart={cart}/>;
		}
		return result;
	}
}
CartContainer.propTypes = {
	cart : PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}).isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired,
	onChangeMsg: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
	return {
		cart : state.cart
	};
}
const mapDispatchToProps = (dispatch, action) => {
	return {
		onDeleteProductInCart: (id)=>{
			dispatch(actions.deleteProductInCart(id));
		},
		onChangeMsg: (message) => {
			console.log('message :', message);
			dispatch(actions.changeMessage(message));
		},
		onUpdateProductInCart: (product, quantity)=>{
			dispatch(actions.updateProductInCart(product, quantity));
		},
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
