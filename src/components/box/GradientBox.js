/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'

export default class GradientBox extends Component {

    render(){
        return (
            <div className="box box-solid bg-light-blue-gradient">
                <div className="box-header ui-sortable-handle" >
                    <div className="pull-right box-tools">
                        <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                            <i className="fa fa-calendar"></i></button>
                        <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" >
                            <i className="fa fa-minus"></i></button>
                    </div>
                    <i className="fa fa-map-marker"></i>
                    <h3 className="box-title">
                        Visitors
                    </h3>
                </div>
                <div className="box-body">
                    <div className="container"></div>
                </div>
                <div className="box-footer no-border">
                    <div className="row">
                        <div className="col-xs-4 text-center" >
                            <div id="sparkline-1"><canvas width="80" height="50"></canvas></div>
                            <div className="knob-label">Visitors</div>
                        </div>
                        <div className="col-xs-4 text-center" >
                            <div id="sparkline-2"><canvas width="80" height="50"></canvas></div>
                            <div className="knob-label">Online</div>
                        </div>
                        <div className="col-xs-4 text-center">/
                            <div id="sparkline-3"><canvas width="80" height="50"></canvas></div>
                            <div className="knob-label">Exists</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}