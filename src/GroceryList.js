import React,{Component} from "react";
import GroceryItem from "./GroceryItem.js"
class GroceryList extends Component{
	constructor(props){
		super(props);
	}
	deleteNode(key) {
		this.props.deleteCallback(key)
	}
	addCart(key) {
		this.props.addCart(key)
	}
	render() {
		let list = this.props.test1;
		let listArr = list.map((dude)=><div key={dude.key}><li>{dude.text}</li> 
					<button onClick={()=>this.deleteNode(dude.key)}>Delete</button><button onClick={()=>this.addCart(dude.key)}>Add to Cart</button></div>)
		return(
			<div>
				<h3> Grocery List below</h3>
				<ul>
					{listArr}
				</ul>
			</div>
		)
	}
}

export default GroceryList;