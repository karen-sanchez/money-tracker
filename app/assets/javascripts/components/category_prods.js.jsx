var CategoriesProd = React.createClass({

	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(category) {
		this.props.handleUpdate(category);
	},

	render() {
		let categories = this.props.categories.map((category) => {
			return (
				<div key={category.id}>
					<CategoriesProdList category={category}
					handleDelete={this.handleDelete.bind(this, category.id)} 
					handleUpdate={this.onUpdate} />
				</div>
			);
		});

		return (
			<div className="col-sm-12 col-md-6">
				{categories}
			</div>
		)
	}
});