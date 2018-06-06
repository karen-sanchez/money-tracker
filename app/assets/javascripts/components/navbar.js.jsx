var Navbar = React.createClass({

	render() {
		return (
			<aside className="col-12 col-md-2 p-0 bg-dark">
				<nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row">
					<div className="collapse navbar-collapse">
						<ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
							<li className="nav-item">
								<a className="nav-link" href="#"><i className="fab fa-3x fa-medium"></i></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/"><i className="fas fa-3x fa-home"></i></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/categories"><i className="fas fa-3x fa-plus-circle"></i></a>
							</li>
						</ul>
					</div>
				</nav>
			</aside>
		)
	}

});