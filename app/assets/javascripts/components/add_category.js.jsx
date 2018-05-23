var NewCategoryForm = React.createClass({

	handleClick() {
		let name = this.state.name;
		$.ajax({
			url: '/categories',
			type: 'POST',
			data: { category: { name: name } },
			success: (category) => {
				this.props.handleSubmit(category);
			}
		});
	},

	render() {
		return (
			<div>
				<input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder="Enter new category" />
				<button type="button" className="btn btn-sm btn-success" onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});