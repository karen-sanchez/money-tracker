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
			<form className="form-inline">
				<input className="form-control mr-sm-2" onChange={ (e) => this.setState({ name: e.target.value }) } placeholder="Enter name of item" />
				<input className="form-control mr-sm-2" onChange={ (e) => this.setState({ price: e.target.value }) } placeholder="Price" />
				<select className="custom-select custom-select-sm mr-sm-2" onChange={ (e) => this.setState({ catId: e.target.value }) }>
					{optionItems}
				</select>
				<button type="button" className="btn btn-md btn-success btn-block" onClick={this.handleClick}>Submit</button>
			</form>
			</div>
		)
	}

});