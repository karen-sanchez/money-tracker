var Categories = React.createClass({

	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(category) {
		this.props.handleUpdate(category);
	},

	passProductId(id){
		this.props.handleProductDelete(id);
	},

	passProduct(product) {
		this.props.handleProductUpdate(product);
	},

	render() {
		let categories = this.props.categories.map((category) => {
			return (
				<div key={category.id}>
					<Category category={category}
					handleDelete={this.handleDelete.bind(this, category.id)} 
					handleUpdate={this.onUpdate} products={this.props.products} passProductId={this.passProductId} passProduct={this.passProduct} totalByCat={this.props.totalByCat} />
					<AmountBox total={this.props.totalByCat(category.id)} />
				</div>
			);
		});

		return (
			<div className="row">
				{categories}
			</div>
		)
	}
});