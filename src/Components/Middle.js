import React from 'react';

export default () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-6">
			</div>
			<div className="col-md-6">
			    <div class="row">
			        <div>
			            <div className="jumbotron">
								  <h2 className="text-center mb-4">Enquiry Form</h2>
								  <form className="form-inline justify-content-center w-100">
								  			<input name="searchText" className="form-control w-75 mt-2 mb-2" type="text" placeholder="Name"
										   	 aria-label="Search" />
										   	<input name="searchText" className="form-control w-75 mt-2 mb-2" type="text" placeholder="Email"
										   	 aria-label="Search" />
										   	<input name="searchText" className="form-control w-75 mt-2 mb-2" type="text" placeholder="Phone no."
										   	 aria-label="Search" />
										   <input name="searchText" className="form-control w-75 mt-2 mb-2" type="text" placeholder="Source"
										   	 aria-label="Search" />
										   <input name="searchText" className="form-control w-75 mt-2 mb-3" type="text" placeholder="Destination"
										   	 aria-label="Search" />
										   <button type="submit" className="btn btn-success mt-3 w-50 ml-2">Send Enquiry</button>
								   </form>
							</div>          
			        </div>
			    </div>
		    </div>
		</div>
	</div>
)


