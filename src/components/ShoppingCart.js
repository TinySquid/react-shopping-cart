import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, setCart, removeItem } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + (value.price * value.quantity);
		}, 0).toFixed(2);
	};

	const setQuantity = (itemId, quantity) => {
		setCart(cart.map(cartItem => {
			if (cartItem.id === itemId) {
				return {
					...cartItem,
					quantity: quantity
				}
			} else {
				return cartItem;
			}
		}))
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} setQuantity={setQuantity} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
