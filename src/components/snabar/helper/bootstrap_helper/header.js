/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'

export default class Header extends Component {
    render(){
        return(
            <div class="page-header">
                <h1>{this.props.title} <small>{this.props.subtitle}</small></h1>
            </div>
        )
    }
}
