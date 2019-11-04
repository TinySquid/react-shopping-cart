import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
	const { cart } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{
					cart.reduce((acc, item) => {
						return acc + Number(item.quantity);
					}, 0)}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
