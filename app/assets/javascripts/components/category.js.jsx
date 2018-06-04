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
		let name = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <h5 className="d-inline p-2">{this.props.category.name}</h5>;
		let cat = this.props.category.id;
		let edit = <i className="fas fa-pencil-alt"></i>;
		let submit = <i className="fas fa-check"></i>;

		let products = this.props.products.map((product) => {
			if ( product.category_id === cat ) {
				return (
					<div key={product.id}>
						<div>
							<Product id={product.id} name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} handleProductDelete={this.handleProductDelete.bind(this, product.id)} handleUpdate={this.onUpdateProd} />
						</div>
					</div>
				);
			}
		});

		return (
			<div className="col">
				<div className="list-group-item">
					<div className="text-center">
						{name}
						<button type="button" className="btn btn-danger d-inline p-2" onClick={this.props.handleDelete}> <i className="fas fa-times"></i></button>
						<button type="button" className="btn btn-info d-inline p-2" onClick={this.handleEdit}> {this.state.editable ? submit : edit }</button>
					</div>
					{products}
					<br /><AmountBox total={this.props.totalByCat(cat)} />
				</div>
			</div>
		)
	}
});