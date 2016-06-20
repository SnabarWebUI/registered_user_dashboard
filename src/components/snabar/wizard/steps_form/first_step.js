/**
 * Created by akash on 17/06/16.
 */

import React, {Component} from 'react'
import InputBasic from '../../helper/form_helper/InputBasic'
import InputAddress from '../../helper/form_helper/InputAddress'
import Header from '../../helper/bootstrap_helper/header'
import CircularLoading from '../../wizard/wizard_circle'

export default class FirstStep extends Component {
    render(){
        return (
            <div className="col-md-6">
                <Header title="Personal Info" subtitle="Let us know about you" />
                <hr />
            <form action="#" className="form-horizontal">

                {/* Shop Name */}
                <InputBasic label="Shop Name" placeholder="Shop name" />

                {/* Shop Owner name */}
                <InputBasic label="Owner" placeholder="Owner name" />

                {/* Owner email address */}
                <InputBasic label="Email" placeholder="Email" />

                {/* Owner mobile no */}
                <InputBasic label="Mobile" placeholder="Mobile no" />

                {/* Shop Address */}
                <InputAddress />

                <input type="button" value="Next" className="btn btn-primary pull-right" />
            </form>
            </div>
        )
    }
}
