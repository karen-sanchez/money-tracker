var Navbar = React.createClass({

	render() {
		return (
			<aside className="col-12 col-md-2 p-0 sidenav-parent">
				<nav className="navbar navbar-expand sidenav flex-md-column flex-row">
					<div className="collapse navbar-collapse">
						<ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
							<li className="nav-item">
								<a href="/"><Img src="/assets/tracker-logo.png" className="nav-logo test" /></a>
							</li>
							<li className="nav-item my-auto">
								<a className="nav-link" href="/"><i className="fas fa-2x fa-home"></i></a>
							</li>
							<li className="nav-item my-auto">
								<a className="nav-link" href="/categories"><i className="fas fa-2x fa-plus-circle"></i></a>
							</li>
						</ul>
					</div>
				</nav>
			</aside>
		)
	}

});