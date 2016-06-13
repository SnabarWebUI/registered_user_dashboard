/**
 * Created by akash on 12/06/16.
 */

import React from 'react'
import {Table} from 'react-bootstrap'
import TableRow from './TableRow'
import * as axios from 'axios'

export default class RecordTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            row: []
        }
    }

    componentWillMount(){
        axios.get('http://127.0.0.1:8081/r_users')
            .then((res) => {this.setState({row: res.data})})
            .catch((err) => {console.log(err)})
    }
    
    render(){
        if (this.state.row.length == 0){
            return (
                <div>
                    <h3>Loading ... </h3>
                </div>
            )
        }

        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Created at</th>
                </tr>
                </thead>
                    <TableRow item={this.state.row}/>
            </Table>
        )
    }
}