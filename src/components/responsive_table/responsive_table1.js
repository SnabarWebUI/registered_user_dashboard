import React,{Component} from 'react'
import {Table} from 'react-bootstrap'
import Cell from './cell'
export default class SimpleTest extends React.Component{

	render(){

		const data=[{order_no:13,name:"iphone",product:5,status:"available"},{order_no:14,name:"iphone",product:6,status:"not_available"},{order_no:13,name:"iphone",product:5,status:"available"}];

		return(
			<div> 
			<Table>
			<tr>
			<th>order_no</th>
			<th>name</th>
			<th>product</th>
			<th>status</th>
			</tr>
			{
				data.map((d)=>{
					return <Cell data={d}/>


				})


				

			}
			

			</Table>

			</div>

			)
	}
}