/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'
import Dropdown from './../../../admin/dropdown'

export default class InputAddress extends Component {
    render(){
        const city = ["Pune","Mumbai"]
        return (
            <div className="form-group">
                <label htmlFor="" className="col-sm-2 control-label">Address</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Street No."/><br />
                    <input type="text" className="form-control" placeholder="Area Name"/><br />
                </div>
            </div>
        )
    }
}
