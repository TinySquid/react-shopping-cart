import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<div className="options">
					<button onClick={() => props.removeItem(props.id)}>Remove from cart</button>
					<label>Quantity
					<select defaultValue={props.quantity} onChange={e => props.setQuantity(props.id, e.target.value)}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Item;
