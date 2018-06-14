var NewProductForm = React.createClass({

	getInitialState() {
		return {name: '', price: '', catId: ''}
	},

	nameChange(event) {
		this.setState({name: event.target.value});
	},

	priceChange(event) {
		this.setState({price: event.target.value});
	},

	selectChange(event) {
		this.setState({catId: event.target.value});
	},

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
				this.setState({name: ''});
				this.setState({price: ''});
				this.setState({catId: ''});
			}
		});
	},

	render () {
		let categories = this.props.categories;

		return (
			<form className="mb-3">
				<div className="form-row">
					<div className="form-group col-md-3">
						<input className="form-control mr-sm-2" onChange={this.nameChange} value={this.state.name} placeholder="Enter new item" />
					</div>
					<div className="form-group col-md-1">
						<input className="form-control mr-sm-2" onChange={this.priceChange} value={this.state.price} placeholder="Price" />
					</div>
					<div className="form-group col-md-3">
						<select className="custom-select custom-select-md mr-sm-2" onChange={this.selectChange} value={this.state.catId} >
							<option value="">Select category</option>
							{categories.map(category => {
							  return (
							    <option key={category.id} value={category.id}>{category.name}</option>
							  );
							})}
						</select>
					</div>
					<div className="form-group col-md-3">
						<button type="button" className="btn btn-md btn-mint btn-block" onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</form>
		)
	}

});