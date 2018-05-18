var Product = React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.name}</li>
					<li>{this.props.price}</li>
					<li>cat_id: {this.props.categoryid}</li>
					<li>user_id: {this.props.userid}</li>
				</ul>
			</div>
		);
	}
});