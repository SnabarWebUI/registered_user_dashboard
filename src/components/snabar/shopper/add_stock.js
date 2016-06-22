import React,{Component}from 'react'
export default class HorizontalForm extends Component{

  render(){
    return(

      <form className="form-inline">
        <div className="form-group">
          <label for="exampleInputName2">category:</label>
          <input type="text" className="form-control margin-left margin-right"  />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail2">Product_Name:</label>
          <input type="text" className="form-control margin-left margin-right" id="exampleInputEmail2" />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail2">Stock:</label>
          <input type="text" className="form-control margin-left margin-right" id="exampleInputEmail2" />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail2">Price:</label>
          <input type="text" className="form-control margin-left margin-right" id="exampleInputEmail2" />
        </div>


        <button type="submit" className="btn btn-primary margin-left">submit</button>
      </form>
    )
  }
}
