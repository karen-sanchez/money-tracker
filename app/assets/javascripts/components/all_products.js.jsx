var Products = React.createClass({

	handleProductDelete(id) {
		this.props.handleProductDelete(id);
	},

	onUpdate(product) {
		this.props.handleProductUpdate(product);
	},

	render() {
		let products = this.props.products.map((product) => {
			return (
				<div key={product.id}>
					<div>
						<Product id={product.id} name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} handleProductDelete={this.handleProductDelete.bind(this, product.id)} handleUpdate={this.onUpdate} />
					</div>
				</div>
			);
		});
		return (
			<div id="accordion" className="col-sm">
				<div className="card">
					<div className="card-header bg-mint" id="headingOne">
					  <h5 className="panel-title mb-0">
					    <a className="btn btn-link btn-block text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					    	All items
					    </a>
					  </h5>
					</div>
					<div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
						<div className="card-body">
							{products}
						</div>
					</div>
				</div>
			</div>
		);
	}
});