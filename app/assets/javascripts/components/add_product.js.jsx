var NewProductForm = React.createClass({

	handleClick() {
		var name = this.state.name,
			price = this.state.price;

		$.ajax({
			url: '/products',
			type: 'POST',
			data: { product: { name: name, price: price, category_id: 84, user_id: 1 } },
			success: (product) => {
				this.props.handleSubmitProduct(product);
			}
		});
	},

	render() {
		return (
			<div>
				<input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter name of item' />
				<input onChange={ (e) => this.setState({ price: e.target.value }) } placeholder='Price' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});