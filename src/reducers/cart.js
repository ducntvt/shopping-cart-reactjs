import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('Cart'));

var initialState = data ? data : [];


const cart = (state = initialState, action) => {
	var index = -1;
	var {product, quantity} = action;
	switch(action.type){
		case Types.ADD_TO_CART:
			index = findProductInCart(state, product);
			if (index !== -1) {
				state[index].quantity += 1;
			}else {
				state.push({
					product,
					quantity
				})
			}
			localStorage.setItem('Cart', JSON.stringify(state))
			return [...state];
		case Types.DELETE_PRODUCT_IN_CART:
			index = findProductInCart(state, product);
			if(index !== -1){
				state.splice(index, 1)
			}
			localStorage.setItem('Cart', JSON.stringify(state))
			return [...state];
		case Types.UPDATE_PRODUCT_IN_CART:
			index = findProductInCart(state, product);
			if(index !== -1){
				state[index].quantity= quantity;
			}
			localStorage.setItem('Cart', JSON.stringify(state))
			return [...state];		
		default:
			return [...state];
	}
}

var findProductInCart = (cart, product) => {
	var index = -1;
	if(cart.length > 0){
		let i = 0
		for (;i < cart.length; i++) {
			if(cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}

export default cart;

