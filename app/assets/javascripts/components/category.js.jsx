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
		let name = this.state.editable ? <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <span>{this.props.category.name}</span>;
		let cat = this.props.category.id;
		let edit = <i className="fas fa-pencil-alt"></i>;
		let submit = <i className="fas fa-check"></i>;


		return (
			<div className="list-group">
				<div className="list-group-item">
					<div className="row p-2">
						<div className="col-8">
							{name}
						</div>
						<div className="col-4">
							<button type="button" className="close" onClick={this.props.handleDelete}><i className="fas fa-times"></i></button>
							<button type="button" className="close" onClick={this.handleEdit}>{this.state.editable ? submit : edit }</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
});