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
            <div className="animated fadeIn">
            <form action="#" className="form-horizontal">
                <legend><i className="ion-ios-locked-outline"></i>  &nbsp; Personal Info </legend>
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

            </form>
            </div>
        )
    }
}
