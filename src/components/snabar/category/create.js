/**
 * Created by akash on 20/06/16.
 */

import React, {Component} from 'react'
import Header from '../helper/bootstrap_helper/header'
import InputBasic from './../helper/form_helper/InputBasic'
import {Form} from 'react-bootstrap'
import Button from '../helper/bootstrap_helper/Button'

export default class CreateCategory extends Component {
    render(){
        return (
            <div>
                <legend>New Category</legend>
                <Form horizontal>
                    <InputBasic label="Category" placeholder="Enter New Category"/>
                    <Button name="Add" position="center-block" bs="primary" handleClick={(e)=>{
                        e.preventDefault();
                        alert("button clicked");
                    }}/>
                </Form>
            </div>
        )
    }
}
