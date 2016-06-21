/**
 * Created by akash on 20/06/16.
 */

import React, {Component} from 'react';

import Header from '../../helper/bootstrap_helper/header'
import InputBasic from '../../helper/form_helper/InputBasic'
import Button from './../../helper/bootstrap_helper/Button'
import {Col,
        Form} from 'react-bootstrap'

export default class ThirdStep extends Component {
    render(){
        return (
            <div>
               <Form horizontal>
                    <legend><i className="ion-ios-locked-outline"></i>  &nbsp; Income Tax Details </legend>
                    <InputBasic label="PAN No" placeholder="Shop PAN number" />
                    <InputBasic label="VAT No" placeholder="Shop VAT no" />
                    <InputBasic label="TIN No" placeholder="Shop TIN no" />
                    <legend><i className="ion-social-usd-outline"></i>  &nbsp; Bank Details </legend>
                    <InputBasic label="Account No" placeholder="Bank account number" />
                    <InputBasic label="Account Name" placeholder="Bank account name" />
                    <InputBasic label="Bank IFSC Code" placeholder="Bank IFSC Code" />
                    <Button name="Continue" position="center-block" bs="primary" handleClick={(e) => {
                        e.preventDefault();
                        alert("alert from this one")
                    }} />
                </Form>
            </div>
        )
    }
}
