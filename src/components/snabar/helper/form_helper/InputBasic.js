/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'

export default class InputBasic extends Component {
    render(){
        return (
                <div className="form-group">
                    <label htmlFor="" className="col-sm-2 control-label">{this.props.label}</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder={this.props.placeholder}/>
                    </div>
                </div>
        )
    }
}
