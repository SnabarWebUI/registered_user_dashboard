import React ,{Component} from 'react'
export default class Dropdown extends Component{

	render(){


		return(
			<div class="box box-default">
				<div className="box-header with-border">
					<h3 className="box-title">Select2</h3>

					<div className="box-tools pull-right">
						<button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
						<button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
					</div>
				</div>
				<div className="box-body">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Minimal</label>
								<select className="form-control select2 select2-hidden-accessible" styles="width: 100%;" tabindex="-1" aria-hidden="true">
									<option selected="selected">Alabama</option>
									<option>Alaska</option>
									<option>California</option>
									<option>Delaware</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Washington</option>
								</select><span className="select2 select2-container select2-container--default select2-container--focus" dir="ltr" styles="width: 100%;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-1p99-container"><span className="select2-selection__rendered" id="select2-1p99-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
							</div>
							<div className="form-group">
								<label>Disabled</label>
								<select className="form-control select2 select2-hidden-accessible" disabled="" styles="width: 100%;" tabindex="-1" aria-hidden="true">
									<option selected="selected">Alabama</option>
									<option>Alaska</option>
									<option>California</option>
									<option>Delaware</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Washington</option>
								</select><span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" styles="width: 100%;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-qsdn-container"><span className="select2-selection__rendered" id="select2-qsdn-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Multiple</label>
								<select className="form-control select2 select2-hidden-accessible" multiple="" data-placeholder="Select a State" styles="width: 100%;" tabindex="-1" aria-hidden="true">
									<option>Alabama</option>
									<option>Alaska</option>
									<option>California</option>
									<option>Delaware</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Washington</option>
								</select><span className="select2 select2-container select2-container--default" dir="ltr" styles="width: 100%;"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Select a State" styles="width: 476px;" /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
							</div>
							<div className="form-group">
								<label>Disabled Result</label>
								<select className="form-control select2 select2-hidden-accessible" styles="width: 100%;" tabindex="-1" aria-hidden="true">
									<option selected="selected">Alabama</option>
									<option>Alaska</option>
									<option disabled="disabled">California (disabled)</option>
									<option>Delaware</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Washington</option>
								</select><span className="select2 select2-container select2-container--default" dir="ltr" styles="width: 100%;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-5op8-container"><span className="select2-selection__rendered" id="select2-5op8-container" title="Alabama">Alabama</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
							</div>
						</div>
					</div>
				</div>
				<div className="box-footer">
					Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
					the plugin.
				</div>
			</div>
			)
	}
}