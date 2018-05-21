var Main = React.createClass({

	getInitialState() {
		return { categories: this.props.catdata, products: this.props.itemsdata };
	},

	getDefaultProps() {
		return { categories: [], products: [] };
	},

	handleSubmit(category) {
		let newState = this.state.categories.concat(category);
		this.setState({ categories: newState })
	},

	handleSubmitProduct(product) {
		let newProductState = this.state.products.concat(product);
		this.setState({ products: newProductState })
	},

	handleDelete(id) {
		$.ajax({
			url: `/categories/${id}`,
			type: 'DELETE',
			success: () => {
				this.removeCategoryFromDOM(id);
			}
		});
	},

	handleProductDelete(id) {
		$.ajax({
			url: `/products/${id}`,
			type: 'DELETE',
			success: () => {
				this.removeProductFromDOM(id);
			}
		});
	},

	removeCategoryFromDOM(id) {
		let newCategories = this.state.categories.filter((category) => {
			return category.id != id;
		});
		this.setState({ categories: newCategories });
	},

	removeProductFromDOM(id) {
		let newProducts = this.state.products.filter((product) => {
			return product.id != id;
		});
		this.setState({ products: newProducts });
	},

	handleUpdate(category) {
		$.ajax({
			url: `/categories/${category.id}`,
			type: 'PUT',
			data: { category: category },
			success: () => {
				this.updateCategories(category);
			}
		});
	},

	handleProductUpdate(product) {
		$.ajax({
			url: `/products/${product.id}`,
			type: 'PUT',
			data: { product: product },
			success: () => {
				this.updateProducts(product);
			}
		});
	},

	updateCategories(category) {
		var categories = this.state.categories.filter((s) => { return s.id != category.id });
		categories.push(category);

		this.setState({ categories: categories });
	},

	updateProducts(product) {
		var products = this.state.products.filter((s) => { return s.id != product.id });
		products.push(product);

		this.setState({ products: products });
	},

	render() {
		return (
			<div className='container'>
				<h3>Here is a list of all your categories</h3>
				<NewCategoryForm handleSubmit={this.handleSubmit} />
				<Categories categories={this.state.categories} handleDelete={this.handleDelete}  handleUpdate={this.handleUpdate} />
				<h3>Here is a list of all your items</h3>
				<Products products={this.state.products} handleProductDelete={this.handleProductDelete} handleProductUpdate={this.handleProductUpdate} />
				<NewProductForm handleSubmitProduct={this.handleSubmitProduct} />
			</div>
		);
	}
});