import React,{Component} from 'react'

export default class Cell extends Component{
	render(){
console.log(this.props)
		return(

			<tr>
			<td>{this.props.data.order_no}</td>
			<td>{this.props.data.name}</td>
			<td>{this.props.data.product}</td>
			<td>{this.props.data.status}</td>
			</tr>
			)
	}


}