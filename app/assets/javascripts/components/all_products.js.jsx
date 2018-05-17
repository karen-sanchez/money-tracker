var Products = React.createClass({
	 render() {
	    var products = this.props.data.map(function (product) {
	    return (
	    <Product name={product.name} />
	    );
	});
	return (
	      <div>
	        {products}
	      </div>
	  );
	 }
});

// var Products = React.createClass({

// 	getInitialState() {
// 		return { products: [] };
// 	},

// 	componentDidMount() {
// 		 $.getJSON('/products.json', (response) => { this.setState({ products: response }) });
// 	},

// 	render() {
// 		var products = this.state.products.map((product) => {
// 			return (
// 				<div key={product.id}>
// 					<ul>
// 						<li>Product id: {product.id}</li>
// 						<li>Product name: {product.name}</li>
// 						<li>Product price: {product.price}</li>
// 						<li>Product category_id: {product.category_id}</li>
// 						<li>Product user_id: {product.user_id}</li>
// 					</ul>
// 				</div>
// 			)
// 		});

// 		return(
// 			<div>
// 				<h2>Products List</h2>
// 				{products}
// 			</div>
// 		)
// 	}
// });