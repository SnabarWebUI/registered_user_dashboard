/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'
import {Col} from 'react-bootstrap'

export default class InlineInputBasic extends Component {
    render(){
        return (
            <div>
            <Col md={6}>
                <div className="form-group">
                    <label htmlFor="" className="col-sm-3 control-label">{this.props.firstLabel}</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder={this.props.firstPlaceholder}/>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="form-group">
                    <label htmlFor="" className="col-sm-3 control-label">{this.props.secondLabel}</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder={this.props.secondPlaceholder}/>
                    </div>
                </div>
            </Col>
            </div>
        )
    }
}