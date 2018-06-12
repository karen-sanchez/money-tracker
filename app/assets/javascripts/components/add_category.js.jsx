var NewCategoryForm = React.createClass({

	getInitialState() {
	    return { name: ''};
	},

	handleChange(event) {
		this.setState({name: event.target.value});
	},

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
				this.setState({name: ''});
			}
		});
	},

	render() {
		return (
			<form className="mb-3 mt-3">
				<div className="form-row">
					<div className="form-group col-md-3">
						<input className="form-control mr-sm-2" onChange={this.handleChange} value={this.state.name} placeholder="Enter new category" />
					</div>
					<div className="form-group col-md-3">
						<button type="button" className="btn btn-md btn-mint btn-block" onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</form>
		)
	}
});