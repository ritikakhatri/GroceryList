import React,{Component} from "react";

import AddBar from "./AddBar.js";
import GroceryList from "./GroceryList.js";
import AddCart from "./AddCart.js"

class GroceryContainer extends Component {
	constructor(props){
		super(props);
		this.state = {itemName: [], addtoCart: []};
		this.deleteCallBack = this.deleteCallBack.bind(this);
		this.addCart = this.addCart.bind(this);

	}
	dataCallBack(item) {
		let newItem = {
				key: Date.now(),
				text: item
			};
		this.setState((prevState)=>
			({itemName: prevState.itemName.concat(newItem)})
		);
	}
	deleteCallBack(deletedItem){
		let x = this.state.itemName.filter((obj)=> obj.key !== deletedItem)
		this.setState({
			itemName: x
		})
	}
	addCart(key) {
		this.deleteCallBack(key)
		let x = this.state.itemName.filter((obj)=> obj.key === key)
		this.setState((prevState)=>
			({addtoCart: prevState.addtoCart.concat(x)})
		);
		console.log(this.state.addtoCart)
	}
	render(){

		return(
			<div>
				<AddBar test={(item)=>this.dataCallBack(item)}/>
				<GroceryList test1={this.state.itemName} deleteCallback={this.deleteCallBack} addCart={this.addCart}/>
				<AddCart add={this.state.addtoCart} />

			</div>
		)
	}
}


export default GroceryContainer;