/**
 * Created by akash on 20/06/16.
 */

import React, {Component} from 'react'
import Header from '../helper/bootstrap_helper/header'
import InputBasic from './../helper/form_helper/InputBasic'
import {Form} from 'react-bootstrap'

export default class CreateCategory extends Component {
    render(){
        return (
            <div className="col-md-10">
                <legend>New Category</legend>
                <Form horizontal>
                    <InputBasic label="Category" placeholder="Enter New Category"/>
                </Form>
            </div>
        )
    }
}
