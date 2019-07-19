import React, { Component } from "react";
import {connect} from 'react-redux';

import * as MSG from './../constants/Message';

class ProductItem extends Component {
	render() {
		var { product } = this.props;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img
							src={product.image}
							className="img-fluid"
							alt={product.name}
						/>
						<a>
							<div className="mask waves-light waves-effect waves-light" />
						</a>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<a>{product.name}</a>
							</strong>
						</h4>
						<ul className="rating">
							<li>
								{this.showRating(product.rating)}
							</li>
						</ul>
						<p className="card-text">{product.description}</p>
						<div className="card-footer">
							<span className="left">{product.price}$</span>
							<span className="right">
								<a
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									title=""
									data-original-title="Add to Cart"
									onClick={this.onAddToCart(product)}
								>
									<i className="fa fa-shopping-cart" />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	showRating = (rating) =>{
		var result = [];
		for (let i = 1; i <= rating;i++) {
			result.push(<i className="fa fa-star" key={i} />);			
		}
		for (let j = 1; j <= (5-rating); j++) {
			result.push(<i className="fa fa-star-o" key = {j+rating}/>);
		}
		return result;
	}

	onAddToCart = (product) => () => {
		this.props.onAddToCart(product);
		this.props.onChangeMsg(MSG.MSG_ADD_TO_CART_SUCCESS);
	}

}
const mapStateToProps = (state) => {
	return {};
}
const mapDispatchToProps = (state, dispatch) => {
	return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
