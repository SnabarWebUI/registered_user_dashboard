import React, { Component } from 'react';
import Header from './admin/header'
import Sidebar from './admin/Sidebar'
import Content from './admin/content'
import Login from './login/Login'
import GradientBox from './box/GradientBox'
import CircularLoading from './snabar/wizard/wizard_circle'
import CreateCategory from './snabar/category/create'

export default class App extends Component {

  render() {
    return (
        <div className="row">
            <div>
                <CreateCategory />
          </div>
        </div>
    );
  }
}