var Products = React.createClass({

	render() {
		var products = this.props.products.map(function (product) {
			return (
				<div key={product.id}>
					<Product name={product.name} price={product.price} categoryid={product.category_id} userid={product.user_id} />
				</div>
			);
		});
		return (
			<div>
				<h3>Here is a list of all your items</h3>
				{products}
			</div>
		);
	}
});