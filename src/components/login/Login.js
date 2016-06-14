/**
 * Created by akash on 14/06/16.
 */

import React, {Component} from 'react';

export default class Login extends Component {
    render(){
        return (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Snabar</b>Shop</a>
            </div>
            <div className="login-box-body">
                <form action="../../index2.html" method="post">
                    <div className="form-group has-feedback">
                        <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                </label>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}