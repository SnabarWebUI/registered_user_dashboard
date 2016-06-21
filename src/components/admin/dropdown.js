import React ,{Component} from 'react'
export default class Dropdown extends Component{

	render(){


		return(

			<div>
              <div className="form-group">
                <label>{this.props.lable}</label>
                <select className="form-control select2 select2-hidden-accessible" styles="width: 100%;" tabindex="-1" aria-hidden="true">
                  <option selected="selected">{this.props.data[0]}</option>
                  {
                  	this.props.data.map((d)=>{
                  		return <option>{d}</option>
                  	})
                  }
                  
                </select><span class="select2 select2-container select2-container--default select2-container--below select2-container--open" dir="ltr" styles="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="true" tabindex="0" aria-labelledby="select2-mj7v-container" aria-owns="select2-mj7v-results" aria-activedescendant="select2-mj7v-result-1y55-Alabama"><span class="select2-selection__rendered" id="select2-mj7v-container" title="Alabama">Alabama</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
              </div>
             </div>

			)
	}
}