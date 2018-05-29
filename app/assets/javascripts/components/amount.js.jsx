var AmountBox = React.createClass({

	render() {
		return (
			<div className="col-md-4">
				<div className="card text-white bg-success mb-3">
					<div className="card-header">
						<p>Total</p>
					</div>
					<div className="card-body">
						{this.props.total}
					</div>
				</div>
			</div>
		)
	}

});