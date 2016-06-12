/**
 * Created by akash on 12/06/16.
 */

import React from 'react'

export default class TableRow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log("props of table row : ", this.props)
        return (
            <tbody>
                {this.props.item.map((value,i)=>{
                    return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{value.email}</td>
                        <td>{value.created_at}</td>
                    </tr>
                    )
                })}
            </tbody>
        )
    }
}
