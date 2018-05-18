var Categories = React.createClass({

	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(category) {
		this.props.handleUpdate(category);
	},

	render() {
		var categories = this.props.categories.map((category) => {
			return (
				<div key={category.id}>
					<Category category={category}
					handleDelete={this.handleDelete.bind(this, category.id)} 
					handleUpdate={this.onUpdate}  />
				</div>
			)
		});

		return (
			<div>
				<h3>Here is a list of all your categories</h3>
				{categories}
			</div>
		)
	}
});