import * as Types from './../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: Types.CHANGE_MSG,
        message
    }
}

export const deleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}