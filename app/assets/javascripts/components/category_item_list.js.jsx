var ItemsList = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	componentDidMount() {
		this.setState({ name: this.props.category.name});
	},

	handleEdit() {
		if (this.state.editable) {
			let id = this.props.category.id;
			let name = this.state.name;
			let category = {id: id , name: name};
			
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
		let name = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <span>{this.props.category.name}</span>;
		let cat = this.props.category.id;
		let edit = <i className="fas fa-pencil-alt"></i>;
		let submit = <i className="fas fa-check"></i>;

		let products = this.props.products.map((product) => {
			if ( product.category_id === cat ) {
				return (
					<div key={product.id} className="mb-3">
						<Product id={product.id} name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} handleProductDelete={this.handleProductDelete.bind(this, product.id)} handleUpdate={this.onUpdateProd} />
					</div>
				);
			}
		});

		return (
			<div>
				<div className="header bg-light p-0 m-0">
					<div className="row no-gutters">
						<div className="col-6 text-center">
							<button type="button" className="btn btn-md bg-light-custom" onClick={this.handleEdit}>{this.state.editable ? submit : edit }</button>
						</div>
						<div className="col-6 text-center">						
							<button type="button" className="btn btn-md bg-light-custom" onClick={this.props.handleDelete}><i className="fas fa-times"></i></button>
						</div>
					</div>					
				</div>
				<div className="card-header bg-mint" id="headingOne">
					<small className="panel-title"><a className="btn btn-link btn-block text-left" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{name}</a></small>
				</div>	
				<div id="collapseOne" className="collapse" aria-labelledby="headingOne">
					<div className="card-body">
						{products}
						<div className="text-white bg-blue">
							<AmountBox total={this.props.totalByCat(cat)} />
						</div>
					</div>
				</div>
			</div>
		)
	}
});