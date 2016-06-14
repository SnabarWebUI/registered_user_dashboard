import React, { Component } from 'react';
import Header from './admin/header'
import Sidebar from './admin/Sidebar'
import Content from './admin/content'
import Login from './login/Login'

export default class App extends Component {
  render() {
    return (
            <Login />
    );
  }
}
