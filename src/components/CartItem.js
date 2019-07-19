import React, { Component } from "react";
import * as MSG from './../constants/Message';
class CartItem extends Component {

	render() {
		var { cartItem } = this.props;
		
		return (
			<tr>
				<th scope="row">
					<img
						src={cartItem.product.image}
						alt={cartItem.product.name}
						className="img-fluid z-depth-0"
					/>
				</th>
				<td>
					<h5>
						<strong>{cartItem.product.name}</strong>
					</h5>
				</td>
				<td>{cartItem.product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{cartItem.quantity}</span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick={this.onUpdateProductInCart(cartItem.product, cartItem.quantity -1)}
						>
							<a>—</a>
						</label>
						<label 
							onClick={this.onUpdateProductInCart(cartItem.product, cartItem.quantity + 1)}
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
						>
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{ this.showSubTotal(cartItem.product.price, cartItem.quantity)}$</td>
				<td>
					<button
						type="button"
						className="btn btn-sm btn-primary waves-effect waves-light"
						data-toggle="tooltip"
						data-placement="top"
						title=""
						data-original-title="Remove item"
						onClick={this.onDeleteProductInCart(cartItem.product)}
					>
						X
					</button>
				</td>
			</tr>
		);
	}

	showSubTotal = (price, qty) => {
		return price * qty;
	}

	onDeleteProductInCart=(id)=>()=>{
		this.props.onDeleteProductInCart(id);
		this.props.onChangeMsg(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
	}

	onUpdateProductInCart=(product, quantity)=>()=>{
		if(quantity>0){
			this.props.onUpdateProductInCart(product, quantity);
			this.props.onChangeMsg(MSG.MSG_UPDATE_CART_SUCCESS);
		}
	}
}

export default CartItem;
