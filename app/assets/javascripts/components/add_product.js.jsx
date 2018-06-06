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
			<form className="mb-3">
				<div className="form-row">
					<div className="form-group col-md-6">
						<input className="form-control mr-sm-2" onChange={ (e) => this.setState({ name: e.target.value }) } placeholder="Enter name of item" />
					</div>
					<div className="form-group col-md-6">
						<input className="form-control mr-sm-2" onChange={ (e) => this.setState({ price: e.target.value }) } placeholder="Price" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<select className="custom-select custom-select-md mr-sm-2" onChange={ (e) => this.setState({ catId: e.target.value }) }>
							{optionItems}
						</select>
					</div>
					<div className="form-group col-md-6">
						<button type="button" className="btn btn-md btn-success btn-block" onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</form>
		)
	}

});