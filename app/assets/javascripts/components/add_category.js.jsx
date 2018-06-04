var NewCategoryForm = React.createClass({

	handleClick() {

		let date = new Date();
		let year = date.getFullYear().toString();
		let month = (date.getMonth() + 1).toString();
		let day = date.getDate().toString();
		(day.length == 1) && (day = '0' + day);
		(month.length == 1) && (month = '0' + month);
		let dateFormat = year + '-' + month + '-' + day;
		let name = this.state.name;

		$.ajax({
			url: '/categories',
			type: 'POST',
			data: { category: { name: name, category_create_date: dateFormat } },
			success: (category) => {
				this.props.handleSubmit(category);
			}
		});
	},

	render() {
		return (
			<form className="form-inline mt-3">
				<input className="form-control mr-sm-2" onChange={ (e) => this.setState({ name: e.target.value }) } placeholder="Enter new category" />
				<button type="button" className="btn btn-md btn-success btn-block" onClick={this.handleClick}>Submit</button>
			</form>
		)
	}
});