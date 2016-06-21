/**
 * Created by akash on 20/06/16.
 */

import React, {Component} from 'react'

/**
 * Button
 *
 * Props :
 *  1. bs => Button style (primary,danger,info)
 *  2. position => pull-left, pull-right, center-block (this are accepted props value)
 *  3. name => Name of bootstrap button
 */
export default class Button extends Component {
    render(){
        return(
            <button className={"btn btn-"+this.props.bs+" "+this.props.position} onClick={this.props.handleClick}>{this.props.name}</button>
        )
    }
}