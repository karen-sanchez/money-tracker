var Product = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleProductEdit() {
		if (this.state.editable) {
			var id = this.props.id;
			var itemName = this.state.name;
			var itemPrice = this.state.price;
			this.onUpdate();
		}
		this.setState({ editable: !this.state.editable })
	},

	onUpdate() {
		if(this.state.editable) {
			var id = this.props.id;
			var itemName = this.state.name;
			var itemPrice = this.state.price;

			var product = { id: id, name: itemName, price: itemPrice }

			this.props.handleUpdate(product)
		}
		this.setState({ editable: !this.state.editable })
	},

	render() {
		var id = <p> id: {this.props.id} </p>;
		var itemName = this.state.editable ? <input type='text' onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.name} /> : <p>item name: {this.props.name}</p>;
		var itemPrice = this.state.editable ? <input type='text' onChange={ (e) => this.setState({ price: e.target.value }) } defaultValue={this.props.price} /> : <p> price: {this.props.price}</p>;
		var itemCatId = <p defaultValue={this.props.categoryid}> cat_id: {this.props.categoryid} </p>;
		var itemUserId = <p defaultValue={this.props.userid}> user_id: {this.props.userid}</p>;

		return (
			<div className="col-10 pt-3 pb-3 card">
				<ul>
					{id}
					{itemName}
					{itemPrice}
					{itemCatId}
					{itemUserId}
					<button type="button" className="btn btn-sm btn-primary" onClick={this.props.handleProductDelete}> Delete </button>
					<button type="button" className="btn btn-sm btn-secondary" onClick={this.handleProductEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
				</ul>
			</div>
		);
	}
});