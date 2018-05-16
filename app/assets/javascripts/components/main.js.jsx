var Main = React.createClass({

	getInitialState() {
		return { categories: [] };
	},

	componentDidMount() {
		 $.getJSON('/categories.json', (response) => { this.setState({ categories: response }) });
	},

	handleSubmit(category) {
		let newState = this.state.categories.concat(category);
		this.setState({ categories: newState })
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

	removeCategoryFromDOM(id) {
		let newCategories = this.state.categories.filter((category) => {
			return category.id != id;
		});
		this.setState({ categories: newCategories });
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

	updateCategories(category) {
	  var categories = this.state.categories.filter((s) => { return s.id != category.id });
	  categories.push(category);

	  this.setState({ categories: categories });
	},

	render() {
		return (
			<div>
				<NewCategoryForm handleSubmit={this.handleSubmit} />
				<Categories categories={this.state.categories} handleDelete={this.handleDelete}  handleUpdate={this.handleUpdate} />
			</div>
		);
	}
});