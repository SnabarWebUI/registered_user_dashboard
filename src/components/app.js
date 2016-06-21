import React, { Component } from 'react';
import Header from './admin/header'
import Sidebar from './admin/Sidebar'
import Content from './admin/content'
import Login from './login/Login'
import GradientBox from './box/GradientBox'
import CircularLoading from './snabar/wizard/wizard_circle'
import CreateCategory from './snabar/category/create'
import ThirdStep from './snabar/wizard/steps_form/third_step'
import Button from './snabar/helper/bootstrap_helper/Button'
import FirstStep from './snabar/wizard/steps_form/first_step'

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          page: 1
      }
  }

  render() {
    return (
        <div className="row">
            <div>
                {this.state.page == 1 &&
                    <FirstStep />
                }
                {this.state.page == 2 &&
                    <ThirdStep />
                }
          </div>
            <div className="pull-right margin-top">
                {this.state.page < 2 &&  <button className={"btn btn-primary"} onClick={(e) =>{
                e.preventDefault();
                this.setState({page:this.state.page+1})
            }}>Continue</button> }
                { this.state.page != 1 && <button className={"btn btn-primary margin-left"} onClick={(e)=>{
                e.preventDefault();
                this.setState({page:this.state.page-1})
            }}>Back</button> }
            </div>
        </div>
    );
  }
}