var AmountBox = React.createClass({

	render() {
		return (
			<div className="text-white bg-success">
				<div className="card-body text-center">
					Total: ${this.props.total}
				</div>
			</div>
		)
	}

});