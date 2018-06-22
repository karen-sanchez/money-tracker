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
				<div className="jumbotron">
					<NewCategoryForm handleSubmit={this.handleSubmit} />
					<NewProductForm handleSubmitProduct={this.handleSubmitProduct} categories={this.state.categories} />
				</div>
				<div className="container">
					<div className="row mb-5 mt-5">
						<Categories products={this.state.products} categories={this.state.categories} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} handleProductDelete={this.handleProductDelete} />
						<Products products={this.state.products} handleProductDelete={this.handleProductDelete} handleProductUpdate={this.handleProductUpdate} />
					</div>
					<CategoriesWithItemsList products={this.state.products} categories={this.state.categories} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} handleProductDelete={this.handleProductDelete} handleProductUpdate={this.handleProductUpdate} updateProducts={this.updateProducts} totalByCat={this.totalByCat} />
					<div className="row mt-5 mb-5">
						<div className="col-sm-12 col-md-4 mx-auto">
							<div className="text-white bg-blue p-3">
								<h4><AmountBox total={this.total()} /></h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});