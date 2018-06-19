var NewCategoryForm = React.createClass({

	getInitialState() {
	    return { name: '', formErrors: {name: ''}, nameValid: false, formValid: false };
	},

	handleUserInput (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value}, () => { this.validateField(name, value) });
	},

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let nameValid = this.state.nameValid;

		switch(fieldName) {
			case 'name':
				nameValid = value.length <= 25;
				fieldValidationErrors.name = nameValid ? '': 'Please enter no more than 25 characters.';
			break;
			default:
			break;
		}

		this.setState({formErrors: fieldValidationErrors, nameValid: nameValid}, this.validateForm)
	},

	validateForm() {
		this.setState({formValid: this.state.nameValid });
	},

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	},

	handleClick(e) {
		e.preventDefault();

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
			<div className="panel panel-default">
			  <FormErrors formErrors={this.state.formErrors} />
			</div>
				<div className="form-row">
					<div className={`form-group col-md-3 ${this.errorClass(this.state.formErrors.name)}`}>
						<input className="form-control mr-sm-2" onChange={(event) => this.handleUserInput(event)} name="name" value={this.state.name} placeholder="Enter new category" />
					</div>
					<div className="form-group col-md-3">
						<button type="submit" className="btn btn-md btn-mint btn-block" disabled={!this.state.formValid} onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</form>

		)
	}
});