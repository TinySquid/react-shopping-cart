import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

//Hooks
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
		//Only add unique items to cart
		if (cart.findIndex(cartItem => cartItem.id === item.id) === -1) {
			setCart([...cart, item]);
		} else {
			setCart(cart.map(cartItem => {
				if (cartItem.id === item.id) {
					return {
						...cartItem,
						quantity: cartItem.quantity + 1
					}
				} else {
					return cartItem;
				}
			}))
		}
	};

	const removeItem = itemId => {
		setCart(cart.filter(cartItem => cartItem.id !== itemId));
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, setCart, removeItem }}>

					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route path="/cart" component={ShoppingCart} />

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
