export const cartReducer=(state, action) => {
    switch (action.type) {
        case 'REMOVE_FROM_CART':
            return { 
                ...state, 
                cartProducts:state.cartProducts.filter(c=>c.id!==action.payload.id)
            };
        case 'CHANGE_CART_QTY':
            return {
                ...state, 
                qty:state.cartProducts.qty.filter(c=>c.id===action.payload.id ? c.qty=action.payload.qty:c.qty)}
        case 'INCREMENT_QTY':
            return {
                ...state
            }
        case 'DECREMENT_QTY':
            return {
                ...state
            }
        default:
            return state;
    }
}