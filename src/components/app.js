import React, { Component } from 'react';
import Header from './admin/header'
import Sidebar from './admin/Sidebar'
import Content from './admin/content'
import Login from './login/Login'
import GradientBox from './box/GradientBox'
import CircularLoading from './snabar/wizard/wizard_circle'
import FirstStep from './snabar/wizard/steps_form/first_step'

export default class App extends Component {

  render() {
    return (
        <div className="row">
            <div>
                <FirstStep />
          </div>
        </div>
    );
  }
}
