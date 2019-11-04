import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		if (cart.findIndex(cartItem => cartItem.id === item.id) === -1) {
			setCart([...cart, item]);
		}
	};

	const removeItem = itemId => {
		setCart(cart.filter(cartItem => cartItem.id !== itemId));
	}

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
			/>
		</div>
	);
}

export default App;
