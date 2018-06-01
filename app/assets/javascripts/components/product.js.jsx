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
		let itemName = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.name} /> : <p><strong>Item name:</strong> {this.props.name}</p>;
		let itemPrice = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ price: e.target.value }) } defaultValue={this.props.price} /> : <p><strong>Price:</strong> {this.props.price}</p>;
		let itemCatId = <p defaultValue={this.props.categoryid}> cat_id: {this.props.categoryid} </p>;
		let itemUserId = <p defaultValue={this.props.userid}> user_id: {this.props.userid}</p>;

		return (
			<div className="col-12 pt-1 pb-1">
				<ul className="list-group">
					<div className="list-group-item">
						<div className="float-left">
							<div>{itemName}{itemPrice}</div>
						</div>
						<div className="float-right">
							<button type="button" className="btn btn-outline-danger" onClick={this.props.handleProductDelete}>X</button>
							<button type="button" className="btn btn-outline-info" onClick={this.handleProductEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
						</div>
					</div>
				</ul>
			</div>
		);
	}
});