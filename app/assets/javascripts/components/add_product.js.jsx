var NewProductForm = React.createClass({

	getInitialState() {
		return {name: '', price: '', catId: '', formErrors: {name: '', price: '', catId: ''}, nameValid: false, priceValid: false, catIdValid: false, formValid: false }
	},

	handleUserInput (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value}, () => { this.validateField(name, value) });
	},

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let nameValid = this.state.nameValid;
		let priceValid = this.state.priceValid;
		let catIdValid = this.state.catIdValid;

		switch(fieldName) {
			case 'name':
				nameValid = value.length <= 25;
				fieldValidationErrors.name = nameValid ? '': 'Please enter no more than 25 characters.';
			break;
			case 'price':
			  priceValid = value.match(/^\d+$/);
			  fieldValidationErrors.price = priceValid ? '': 'Only numbers allowed.';
			break;
			case 'catId':
			  catIdValid = value != 'test';
			  fieldValidationErrors.catId = catIdValid ? '': 'Please select a category.';
			break;
			default:
			break;
		}

		this.setState({formErrors: fieldValidationErrors, nameValid: nameValid, priceValid: priceValid, catIdValid: catIdValid}, this.validateForm);
	},

	validateForm() {
		this.setState({formValid: this.state.nameValid && this.state.priceValid && this.state.catIdValid});
	},

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	},

	handleClick(e) {
		e.preventDefault();

		let name = this.state.name,
			price = this.state.price,
			catId = this.state.catId;

		$.ajax({
			url: '/products',
			type: 'POST',
			data: { product: { name: name, price: price, category_id: catId } },
			success: (product) => {
				this.props.handleSubmitProduct(product);
				this.setState({name: '', price: '', catId: '', formValid: false});
			}
		});
	},

	render () {
		let categories = this.props.categories;

		return (
			<form className="mb-3">
			<div className="panel panel-default">
				<FormErrors formErrors={this.state.formErrors} />
			</div>
				<div className="form-row">
					<div className={`form-group col-md-3 ${this.errorClass(this.state.formErrors.name)}`}>
						<input className="form-control mr-sm-2" onChange={(event) => this.handleUserInput(event)} name="name" value={this.state.name} placeholder="Enter new item" />
					</div>
					<div className={`form-group col-md-1 ${this.errorClass(this.state.formErrors.price)}`}>
						<input className="form-control mr-sm-2" onChange={(event) => this.handleUserInput(event)} name="price" value={this.state.price} placeholder="Price" />
					</div>
					<div className="form-group col-md-3">
						<select className={`custom-select custom-select-md mr-sm-2 ${this.errorClass(this.state.formErrors.catId)}`} onChange={(event) => this.handleUserInput(event)} name="catId" value={this.state.catId} >
							<option value="test">Select category</option>
							{categories.map(category => {
							  return (
							    <option key={category.id} value={category.id}>{category.name}</option>
							  );
							})}
						</select>
					</div>
					<div className="form-group col-md-3">
						<button type="submit" className="btn btn-md btn-mint btn-block" disabled={!this.state.formValid} onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</form>
		)
	}

});