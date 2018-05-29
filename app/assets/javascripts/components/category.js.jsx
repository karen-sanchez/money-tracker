var Category = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleEdit() {
		if (this.state.editable) {
			let name = this.state.name;
			this.onUpdate();
		}
		this.setState({ editable: !this.state.editable })
	},

	onUpdate() {
		if (this.state.editable) {
			let id = this.props.category.id;
			let name  = this.state.name;

			let category = { id: id, name: name }

			this.props.handleUpdate(category);
		}
		this.setState({ editable: !this.state.editable })
	},

	handleProductDelete(id) {
		this.props.passProductId(id);
	},

	onUpdateProd(product) {
		this.props.passProduct(product);
	},

	render() {
		let name = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <h5>{this.props.category.name}</h5>;
		let cat = this.props.category.id;

		let products = this.props.products.map((product) => {
			if ( product.category_id === cat ) {
				return (
					<div key={product.id}>
						<div className="card">
							<Product id={product.id} name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} handleProductDelete={this.handleProductDelete.bind(this, product.id)} handleUpdate={this.onUpdateProd} />
						</div>
					</div>
				);
			}
		});

		return (
			<div>
				<div className="col-12 pt-3 pb-3 card">
					{name}
					<p>Cat_id: {cat}</p>
					<button type="button" className="btn btn-sm btn-primary" onClick={this.props.handleDelete}> Delete </button><br />
					<button type="button" className="btn btn-sm btn-secondary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }</button>
				</div>
				<div className="col-12 pt-3 pb-3 mt-3 card">
					{name}
					<p>Cat_id: {cat}</p>
					{products}
					<button type="button" className="btn btn-sm btn-primary" onClick={this.props.handleDelete}> Delete </button><br />
					<button type="button" className="btn btn-sm btn-secondary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }</button>
				</div>
			</div>
		)
	}
});