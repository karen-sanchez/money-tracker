var AmountBox = React.createClass({

	render() {
		return (
			<div className="col-12">
				<div className="card text-white bg-success mb-3">
					<div className="card-body">
						<p>Total: ${this.props.total}</p> 
					</div>
				</div>
			</div>
		)
	}

});