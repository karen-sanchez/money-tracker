var NewCategoryForm = React.createClass({

	handleClick() {
		var name = this.state.name;
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
				<input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter name of new category' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
})