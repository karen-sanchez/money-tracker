var Category = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleClick() {
		let cat = this.props.category.id;
		let products = this.props.products.map((product) => {
			if ( product.category_id === cat ) { return product.id; }
		});

		let productId = products.filter(function(n){ return n != undefined });
		if (productId.length > 1){
			// for(var i = 1; i <= productId.length; i++){
			// 	// this.props.mytest(productId)
			// }
		} else {
			this.props.removeProduct(productId)
		}
		this.props.handleDelete();
	},

	componentDidMount() {
		this.setState({ name: this.props.category.name});
	},

	handleEdit() {
		if (this.state.editable) {
			let id = this.props.category.id;
			let name = this.state.name;
			let category = {id: id , name: name};
			
			this.props.handleUpdate(category);
		}
		this.setState({ editable: !this.state.editable })
	},

	render() {
		let name = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <span>{this.props.category.name}</span>;
		let cat = this.props.category.id;
		let edit = <i className="fas fa-pencil-alt"></i>;
		let submit = <i className="fas fa-check"></i>;


		return (
			<div className="list-group mb-1">
				<div className="list-group-item">
					<div className="d-flex justify-content-between align-items-center">
						<small>{name}</small>
						<div className="btn-group">
							<button type="button" className="btn btn-md bg-light" onClick={this.handleEdit}>{this.state.editable ? submit : edit }</button>
							<button type="button" className="btn btn-md bg-light" onClick={this.handleClick}><i className="fas fa-times"></i></button>					
						</div>
					</div>
				</div>
			</div>
		)
	}
});