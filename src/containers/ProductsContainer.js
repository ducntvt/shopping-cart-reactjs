import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';

import * as actions from './../actions/index';


class ProductsContainer extends Component {
	render() {
		var { products } = this.props;
		return (
			<Products>
				{this.showProduct(products)}
			</Products>
		);
	}

	//Display products
	showProduct=(products)=>{
		var { onAddToCart, onChangeMsg } = this.props;
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) =>{
				return <ProductItem 
					key={index} 
					product={product}
					onAddToCart={onAddToCart}
					onChangeMsg={onChangeMsg}
					/>
			})
		}
		return result;
	}
}

ProductsContainer.propTypes = {
	products : PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired,
	onChangeMsg: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		products : state.products
	};
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) =>{
			dispatch(actions.addToCart(product, 1));
		},
		onChangeMsg: (message) => {
			dispatch(actions.changeMessage(message));
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
