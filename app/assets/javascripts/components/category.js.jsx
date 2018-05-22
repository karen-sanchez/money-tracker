var Category = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleEdit() {
		if (this.state.editable) {
			let name = this.state.name;
			this.onUpdate();
		}
		this.setState({ editable: !this.state.editable })
	},

	onUpdate() {
		if (this.state.editable) {
			let id = this.props.category.id;
			let name  = this.state.name;

			let category = { id: id, name: name }

			this.props.handleUpdate(category);
		}
		this.setState({ editable: !this.state.editable })
	},

	render() {
		let name = this.state.editable ? <input type='text' onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <h5>{this.props.category.name}</h5>;
		let cat = this.props.category.id;

		return (
			<div className="col-12 pt-3 pb-3 card">
				{name}
				<p>Cat_id: {cat}</p>
				<button type="button" className="btn btn-sm btn-primary" onClick={this.props.handleDelete}> Delete </button><br />
				<button type="button" className="btn btn-sm btn-secondary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }</button>
			</div>
		)
	}
});