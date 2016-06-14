/**
 * Created by akash on 13/06/16.
 */

import  React,{Component} from 'react'

export default class Header extends Component {
    render(){
        return (
            <div>
                <header className="main-header">
                    <a href="#" className="logo"><strong>Snabar</strong>Shop</a>
                    <nav className="navbar navbar-static-top" role="navigation">
                    </nav>
                </header>
            </div>
        )
    }
}