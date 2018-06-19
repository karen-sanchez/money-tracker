var FormErrors = React.createClass({

	render() {
		let formErrors = this.props.formErrors;

		return (
			<div className='formErrors'>
				{Object.keys(formErrors).map((fieldName, i) => {
					if(formErrors[fieldName].length > 0){
						return (
							<p key={i}>{fieldName} {formErrors[fieldName]}</p>
						)        
					} else {
						return '';
					}
				})}
			</div>
		);

	}

});
