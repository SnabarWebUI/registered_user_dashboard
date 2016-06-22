import React, {Component} from 'react'
import InputBasic from '../helper/form_helper/InputBasic'
export default class AddProduct extends Component{
	render(){

		return(

				<div>

                <hr />
                <div className="container">
            <form action="#" className="form-horizontal">
                <tr>
                {/* select category */}
								<div className="form-group">
                <InputBasic label="Product Name"  />
                <label>description </label>

								</div>
                 <div className="form-group">
								 <textarea class="form-control" rows="5"></textarea>
								 </div>

                <input type="button" value="Add" className="btn btn-primary pull-right" />
                </tr>
            </form>
            </div>
            </div>











			)
	}

	}
