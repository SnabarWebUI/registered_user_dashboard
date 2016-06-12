/**
 * Created by akash on 12/06/16.
 */

import React from 'react'
import {Table} from 'react-bootstrap'
import TableRow from './TableRow'

export default class RecordTable extends React.Component {
    render(){
        const row = [{
            email : 'akashshinde@gmail.com',
            created_at: '2016-06-10T03:54:11Z'
        },
        {
            email : 'nikhil@gmail.com',
            created_at: '2016-06-10T03:54:11Z'
        }
        ]
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                    <TableRow item={row}/>
                </tbody>
            </Table>
        )
    }
}