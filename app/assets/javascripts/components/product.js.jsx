var Product = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleProductEdit() {
		if (this.state.editable) {
			let id = this.props.id;
			let itemName = this.state.name;
			let itemPrice = this.state.price;
			let catId = this.props.categoryid;
			this.onUpdate();
		}
		this.setState({ editable: !this.state.editable })
	},

	onUpdate() {
		if(this.state.editable) {
			let id = this.props.id;
			let itemName = this.state.name;
			let itemPrice = this.state.price;
			let catId = this.props.categoryid;

			let product = { id: id, name: itemName, price: itemPrice, category_id: catId }

			this.props.handleUpdate(product)
		}
		this.setState({ editable: !this.state.editable })
	},

	render() {
		let id = <p> id: {this.props.id} </p>;
		let itemName = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.name} /> : <span>{this.props.name}</span>;
		let itemPrice = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ price: e.target.value }) } defaultValue={this.props.price} /> : <span>{this.props.price}</span>;
		let itemCatId = <p defaultValue={this.props.categoryid}> cat_id: {this.props.categoryid} </p>;
		let itemUserId = <p defaultValue={this.props.userid}> user_id: {this.props.userid}</p>;
		let edit = <i className="fas fa-pencil-alt"></i>;
		let submit = <i className="fas fa-check"></i>;

		return (
			<div className="list-group mb-1">
				<div className="list-group-item">
					<div className="d-flex justify-content-between align-items-center">
						<small><strong>Item: </strong>{itemName} | <strong>Price: </strong>${itemPrice}</small>
						<small>{id}</small>
						<small>{itemCatId}</small>
						<div className="btn-group">
							<button type="button" className="btn btn-md bg-light" onClick={this.handleProductEdit}> {this.state.editable ? submit : edit }</button>
							<button type="button" className="btn btn-md bg-light" onClick={this.props.handleProductDelete}><i className="fas fa-times"></i></button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});