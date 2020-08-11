export const addItemsToCart = (cartItems, cartItemToAdd) => {
    
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id );

    if(existingCartItem){
        console.log('Exists');
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem

        )
    }
    console.log('Does not Exist');
    return [...cartItems, {cartItemToAdd, quantity: 1 } ]
};