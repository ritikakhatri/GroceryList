import React,{Component} from "react";

class AddBar extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ""};
	}

	handleClick() {
		this.props.test(this.state.value)
		this.setState({value: ""})
	}
	handleChange(e) {
		this.setState({value: e.target.value})
	}
	render() {
		return(
			<div>
				<input value={this.state.value} onChange={(e)=> this.handleChange(e)} type="text"/>
				<button onClick={()=> this.handleClick()}>Add Grocery</button>
			</div>

		)
	}
}

export default AddBar;