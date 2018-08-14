import React,{Component} from "react";

class AddCart extends Component {
	
	render() {
		let list = this.props.add;
        let listArr = list.map((dude)=><li key={dude.key}>{dude.text}</li>);
		return(
			<div>
				<h1>Cart</h1>
				<ul>{listArr}</ul>
			</div>
		)
	}
}

export default AddCart;