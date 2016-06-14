/**
 * Created by akash on 13/06/16.
 */

import React, {Component} from 'react'

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <h3 className="box-title">Exapndable</h3>
                            <div className="box-tools pull-right">
                                <span className="label label-info">Label</span>
                            </div>
                        </div>
                        <div className="box-body">
                            The body of the box
                        </div>
                    </div>
                    <button className="btn btn-default" data-toggle="control-sidebar">Toggle Right Sidebar</button>
                </section>
            </div>
        )
    }
}