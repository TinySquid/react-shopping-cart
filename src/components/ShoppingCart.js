import React, { useContext } from 'react';

//Context
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, setCart, removeItem } = useContext(CartContext);

	//Add up all item prices to calculate total
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + (value.price * value.quantity);
		}, 0).toFixed(2);
	};

	//Change item quantity
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

	//Delete cart items
	const clearCart = () => {
		setCart([]);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} setQuantity={setQuantity} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<div className="buttons">
					<button onClick={clearCart}>Clear Cart</button>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
