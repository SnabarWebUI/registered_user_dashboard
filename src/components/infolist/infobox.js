/**
 * Created by nikhil on 14/6/16.
 */
import React, {Component} from 'react';
export default class InfoBox extends Component{
    
    render(){
        return(
            <div className={"info-box bg-"+this.props.colour}>
                
                <span className="info-box-icon"><i className={"fa "+ this.props.icon} aria-hidden="true"></i>
                </span>
                <div className="info-box-content">
                    <span className="info-box-text">{this.props.title}</span>
                    <span className="info-box-number">1</span>
                    <span className="info-box-text">specification</span>   
                </div>
                </div>
        )
    }

}