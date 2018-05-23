var NewProductForm = React.createClass({

	handleClick() {
		let name = this.state.name,
			price = this.state.price,
			catId = this.state.catId;

		$.ajax({
			url: '/products',
			type: 'POST',
			data: { product: { name: name, price: price, category_id: catId } },
			success: (product) => {
				this.props.handleSubmitProduct(product);
			}
		});
	},

	render () {
		let categories = this.props.categories;
		let optionItems = categories.map((category) =>
			<option key={category.name} value={category.id}>{category.name}</option>
		);

		return (
			<div>
				<input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter name of item' />
				<input onChange={ (e) => this.setState({ price: e.target.value }) } placeholder='Price' />
				<select onChange={ (e) => this.setState({ catId: e.target.value }) }>
					{optionItems}
				</select>
				<button type="button" className="btn btn-sm btn-success" onClick={this.handleClick}>Submit</button>
			</div>
		)
	}

});