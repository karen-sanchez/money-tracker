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
		let categories = this.state.categories.filter((s) => { return s.id != category.id });
		categories.push(category);

		this.setState({ categories: categories });
	},

	updateProducts(product) {
		let products = this.state.products.filter((s) => { return s.id != product.id });
		products.push(product);

		this.setState({ products: products });
	},

	total() {
		let products = this.state.products.filter((product) => {
			return product.price >= 0;
		});
		return products.reduce(function(prev, curr) {
				return prev + parseFloat(curr.price);
			}, 0)
	},

	totalByCat(id) {

		let products = this.state.products.filter((product) => {
			return (id === product.category_id ? product.price >= 0 : 0 )
		});

		return products.reduce(function(prev, curr) {
				return prev + parseFloat(curr.price);
			}, 0)
	},

	render() {
		return (
			<div>
				<div className="container-fluid h-100">
					<div className="row h-100">
						<Navbar />
						<div className="col">
							<NewCategoryForm handleSubmit={this.handleSubmit} />
							<br />
							<NewProductForm handleSubmitProduct={this.handleSubmitProduct} categories={this.state.categories} />
							<h3>Categories with products to buy</h3>
							<Categories products={this.state.products} categories={this.state.categories} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} handleProductDelete={this.handleProductDelete} handleProductUpdate={this.handleProductUpdate} updateProducts={this.updateProducts} totalByCat={this.totalByCat} />
							{/*<h3>Here is a list of all your items</h3>*/}
							{/*<Products products={this.state.products} handleProductDelete={this.handleProductDelete} handleProductUpdate={this.handleProductUpdate} />*/}
							<div className="row">
								<div className="col-3 mx-auto">
									<AmountBox total={this.total()} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});