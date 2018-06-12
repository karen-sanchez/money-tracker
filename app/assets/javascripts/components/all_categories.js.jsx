var Categories = React.createClass({

	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(category) {
		this.props.handleUpdate(category);
	},

	removeProduct(products) {
		this.props.handleProductDelete(products);
	},

	render() {
		let categories = this.props.categories.map((category) => {
			return (
				<div key={category.id}>
					<Category category={category} products={this.props.products} removeProduct={this.removeProduct}
					handleDelete={this.handleDelete.bind(this, category.id)}
					handleUpdate={this.onUpdate} />
				</div>
			);
		});

		return (
			<div id="accordion" className="col-sm">
				<div className="card">
					<div className="card-header bg-mint" id="headingOne">
					  <h5 className="panel-title mb-0">
					    <a className="btn btn-link btn-block text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					    	All categories
					    </a>
					  </h5>
					</div>
					<div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
						<div className="card-body">
							{categories}
						</div>
					</div>
				</div>
			</div>
		)
	}
});