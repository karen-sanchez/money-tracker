var Category = React.createClass({

	getInitialState() {
		return { editable: false }
	},

	handleEdit() {
		if (this.state.editable) {
			var name = this.state.name;
			this.onUpdate();
		}
		this.setState({ editable: !this.state.editable })
	},

	onUpdate() {
	  if (this.state.editable) {
	  	var id = this.props.category.id;
	    var name  = this.state.name;

	    var category = { id: id, name: name }

	    this.props.handleUpdate(category);
	  }
	  this.setState({ editable: !this.state.editable })
	},

	render() {
		var name = this.state.editable ? <input type='text' onChange={ (e) => this.setState({ name: e.target.value }) } defaultValue={this.props.category.name} /> : <p>{this.props.category.name}</p>
		return (
			<div>
				{name}
				<button type="button" className="btn btn-sm btn-primary" onClick={this.props.handleDelete}> Delete </button>
				<button type="button" className="btn btn-sm btn-secondary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'}</button>
			</div>
		)
	}
});