var Products = React.createClass({

	handleProductDelete(id) {
	  this.props.handleProductDelete(id);
	},

	onUpdate(product) {
		this.props.handleProductUpdate(product);
	},

	render() {
		var products = this.props.products.map((product) => {
			return (
				<div key={product.id}>
					<Product id={product.id} name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} handleProductDelete={this.handleProductDelete.bind(this, product.id)} handleUpdate={this.onUpdate} />
				</div>
			);
		});
		return (
			<div className="row">
				{products}
			</div>
		);
	}
});