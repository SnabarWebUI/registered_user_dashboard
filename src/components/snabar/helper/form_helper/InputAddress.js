/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'

export default class InputAddress extends Component {
    render(){
        return (
            <div className="form-group">
                <label htmlFor="" className="col-sm-3 control-label">Address</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Street No."/><br />
                    <input type="text" className="form-control" placeholder="Area Name"/><br />
                    <input type="text" className="form-control" placeholder="City"/>
                </div>
            </div>
        )
    }
}
