import React from 'react';
import './Panel.css'
import './Panel2.css'
import './vendor.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

const Panel = () => {
	return (


		<div className="has-navbar-vertical-aside navbar-vertical-aside-show-xl   footer-offset">

			<Header/>

			<Menu/>

			<Content/>

			{/*// <!-- Export Products Modal -->*/}
			<div className="modal fade" id="exportProductsModal" aria-labelledby="exportProductsModalLabel"
				 aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						{/*// <!-- Header -->*/}
						<div className="modal-header">
							<h4 className="modal-title" id="exportProductsModalLabel">Export products</h4>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						{/*// <!-- End Header -->*/}

						{/*// <!-- Body -->*/}
						<div className="modal-body">
							<p>This CSV file can update all product information. To update just inventory quantites use
								the <a className="link" href="#">CSV file for inventory.</a></p>

							<div className="mb-4">
								<label className="form-label">Export</label>

								<div className="d-grid gap-2">
									{/*// <!-- Form Check -->*/}
									<div className="form-check">
										<input className="form-check-input" type="radio" name="exportProductsRadio"
											   id="exportProductsRadio1" checked/>
										<label className="form-check-label"  htmlFor="exportProductsRadio1">
											Current page
										</label>
									</div>
									{/*// <!-- End Form Check -->*/}

									{/*// <!-- Form Check -->*/}
									<div className="form-check">
										<input className="form-check-input" type="radio" name="exportProductsRadio"
											   id="exportProductsRadio2"/>
										<label className="form-check-label" htmlFor="exportProductsRadio2">
											All products
										</label>
									</div>
									{/*// <!-- End Form Check -->*/}

									{/*// <!-- Form Check -->*/}
									<div className="form-check">
										<input className="form-check-input" type="radio" name="exportProductsRadio"
											   id="exportProductsRadio3"/>
										<label className="form-check-label" htmlFor="exportProductsRadio3">
											Selected: 20 products
										</label>
									</div>
									{/*// <!-- End Form Check -->*/}
								</div>
							</div>

							<label className="form-label">Export as</label>

							{/*// <!-- Form Check -->*/}
							<div className="form-check">
								<input className="form-check-input" type="radio" name="exportProductsAsRadio"
									   id="exportProductsAsRadio1" checked/>
								<label className="form-check-label" htmlFor="exportProductsAsRadio1">
									CSV for Excel, Numbers, or other spreadsheet programs
								</label>
							</div>
							{/*// <!-- End Form Check -->*/}

							{/*// <!-- Form Check -->*/}
							<div className="form-check">
								<input className="form-check-input" type="radio" name="exportProductsAsRadio"
									   id="exportProductsAsRadio2"/>
								<label className="form-check-label" htmlFor="exportProductsAsRadio2">
									Plain CSV file
								</label>
							</div>
							{/*// <!-- End Form Check -->*/}
						</div>
						{/*// <!-- End Body -->*/}

						{/*// <!-- Footer -->*/}
						<div className="modal-footer gap-3">
							<button type="button" className="btn btn-white" data-bs-dismiss="modal"
									aria-label="Close">Cancel
							</button>
							<button type="button" className="btn btn-primary">Export products</button>
						</div>
						{/*// <!-- End Footer -->*/}
					</div>
				</div>
			</div>

			{/*// <!-- Import Products Modal -->*/}
			<div className="modal fade" id="importProductsModal" aria-labelledby="importProductsModalLabel"
				 aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						{/*// <!-- Header -->*/}
						<div className="modal-header">
							<h4 className="modal-title" id="importProductsModalLabel">Import products by CSV</h4>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						{/*// <!-- End Header -->*/}

						{/*// <!-- Body -->*/}
						<div className="modal-body">
							<p><a className="link" href="#">Download a sample CSV template</a> to see an example of the
								format required.</p>

							{/*// <!-- Dropzone -->*/}
							<div id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card mb-4">
								<div className="dz-message">
									<img className="avatar avatar-xl avatar-4x3 mb-3"
										 src="./assets/svg/illustrations/oc-browse.svg" alt="Image Description"
										 data-hs-theme-appearance="default"/>
									<img className="avatar avatar-xl avatar-4x3 mb-3"
										 src="./assets/svg/illustrations-light/oc-browse.svg" alt="Image Description"
										 data-hs-theme-appearance="dark"/>

									<h5>Drag and drop your file here</h5>

									<p className="mb-2">or</p>

									<span className="btn btn-white btn-sm">Browse files</span>
								</div>
							</div>
							{/*// <!-- End Dropzone -->*/}

							{/*// <!-- Form Check -->*/}
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value=""
									   id="overwriteCurrentProductsCheckbox"/>
								<label className="form-check-label" htmlFor="overwriteCurrentProductsCheckbox">
									Overwrite any current products that have the same handle. Existing values will be used
									for any missing columns. <a href="#">Learn more</a>
								</label>
							</div>
							{/*// <!-- End Form Check -->*/}
						</div>
						{/*// <!-- End Body -->*/}

						{/*// <!-- Footer -->*/}
						<div className="modal-footer">
							<button type="button" className="btn btn-white" data-bs-dismiss="modal"
									aria-label="Close">Cancel
							</button>
							<button type="button" className="btn btn-primary">Upload and continue</button>
						</div>
						{/*// <!-- End Footer -->*/}
					</div>
				</div>
			</div>

			{/*// <!-- Product Filter Modal -->*/}
			<div className="offcanvas offcanvas-end" id="offcanvasEcommerceProductFilter"
				 aria-labelledby="offcanvasEcommerceProductFilterLabel">
				<div className="offcanvas-header">
					<h4 id="offcanvasEcommerceProductFilterLabel" className="mb-0">Filters</h4>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<span className="text-cap small">Product vendor</span>

					<div className="row">
						<div className="col-6">
							<div className="d-grid gap-2 mb-2">
								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio1"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio1">Google</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio2"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio2">Topman</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio3"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio3">RayBan</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio4"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio4">Mango</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio5"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio5">Calvin Klein</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio6"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio6">Givenchy</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio7"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio7">Asos</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio8"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio8">Apple</label>
								</div>
								{/*// <!-- End Form Check -->*/}
							</div>
						</div>

						<div className="col-6">
							<div className="d-grid gap-2 mb-2">
								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio9"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio9">Times</label>
								</div>
								{/*// <!-- End Form Check -->*/}

								{/*// <!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio10"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio10">Asos</label>
								</div>

								{/*	<!-- End Form Check -->*/}


								{/*	<!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio11"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio11">Nike Jordan</label>
								</div>

								{/*	<!-- End Form Check -->*/}


								{/*	<!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio12"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio12">VA RVCA</label>
								</div>

								{/*	<!-- End Form Check -->*/}


								{/*	<!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio13"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio13">Levis</label>
								</div>

								{/*	<!-- End Form Check -->*/}


								{/*	<!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio14"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio14">Beats</label>
								</div>

								{/*	<!-- End Form Check -->*/}


								{/*	<!-- Form Check -->*/}
								<div className="form-check">
									<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio"
										   value="" id="productVendorFilterRadio15"/>
									<label className="form-check-label" htmlFor="productVendorFilterRadio15">Clarks</label>
								</div>

								{/*	<!-- End Form Check -->*/}
							</div>
						</div>
					</div>

					{/*	<!-- End Row -->*/}

					<a className="link mt-2" href="javascript:;">
						<i className="bi-x"></i> Clear
					</a>

					<hr/>

					<span className="text-cap small">Availability</span>

					<div className="d-grid gap-2 mb-2">

						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" value=""
								   id="productAvailabilityFilterRadio1"/>
							<label className="form-check-label" htmlFor="productAvailabilityFilterRadio1">Available on Online
								Store</label>
						</div>

						{/*	<!-- End Form Check -->*/}


						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" value=""
								   id="productAvailabilityFilterRadio2"/>
							<label className="form-check-label" htmlFor="productAvailabilityFilterRadio2">Unavailable on Online
								Store</label>
						</div>

						{/*	<!-- End Form Check -->*/}
					</div>

					<a className="link mt-2" href="javascript:;">
						<i className="bi-x"></i> Clear
					</a>

					<hr/>

					<span className="text-cap small">Tagged with</span>

					<div className="mb-2">
						<input type="text" className="form-control" name="tagsName" id="tagsLabel"
							   placeholder="Enter tags here" aria-label="Enter tags here"/>
					</div>

					<a className="link mt-2" href="javascript:;">
						<i className="bi-x"></i> Clear
					</a>

					<hr/>

					<span className="text-cap small">Product type</span>

					<div className="d-grid gap-2 mb-2">
						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productTypeFilterRadio" value=""
								   id="productTypeFilterRadio1"/>
							<label className="form-check-label" htmlFor="productTypeFilterRadio1">Shoes</label>
						</div>
						{/*	<!-- End Form Check -->*/}

						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productTypeFilterRadio" value=""
								   id="productTypeFilterRadio2"/>
							<label className="form-check-label" htmlFor="productTypeFilterRadio2">Accessories</label>
						</div>
						{/*	<!-- End Form Check -->*/}

						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productTypeFilterRadio" value=""
								   id="productTypeFilterRadio3"/>
							<label className="form-check-label" htmlFor="productTypeFilterRadio3">Clothing</label>
						</div>
						{/*	<!-- End Form Check -->*/}

						{/*	<!-- Form Check -->*/}
						<div className="form-check">
							<input className="form-check-input" type="radio" name="productTypeFilterRadio" value=""
								   id="productTypeFilterRadio4"/>
							<label className="form-check-label" htmlFor="productTypeFilterRadio4">Electronics</label>
						</div>
						{/*	<!-- End Form Check -->*/}
					</div>

					<a className="link mt-2" href="javascript:;">
						<i className="bi-x"></i> Clear
					</a>

					<hr/>

					<span className="text-cap small">Collection</span>

					{/*	<!-- Input Group -->*/}
					<div className="input-group input-group-merge mb-2">
						<div className="input-group-prepend input-group-text">
							<i className="bi-search"></i>
						</div>

						<input type="search" className="form-control" placeholder="Search for collections"
							   aria-label="Search for collections"/>
					</div>
					{/*	<!-- End Input Group -->*/}

					{/*	<!-- Form Check -->*/}
					<div className="form-check mb-2">
						<input className="form-check-input" type="radio" value="" id="productCollectionFilterRadio1"/>
						<label className="form-check-label" htmlFor="productCollectionFilterRadio1">Home page</label>
					</div>
					{/*	<!-- End Form Check -->*/}

					<a className="link mt-2" href="javascript:;">
						<i className="bi-x"></i> Clear
					</a>
				</div>
				{/*	<!-- End Body -->*/}

				{/*	<!-- Footer -->*/}
				<div className="offcanvas-footer">
					<div className="row gx-2">
						<div className="col">
							<div className="d-grid">
								<button type="button" className="btn btn-white">Clear all filters</button>
							</div>
						</div>
						{/*	<!-- End Col -->*/}

						<div className="col">
							<div className="d-grid">
								<button type="button" className="btn btn-primary">Save</button>
							</div>
						</div>
						{/*	<!-- End Col -->*/}
					</div>
					{/*	<!-- End Row -->*/}
				</div>
				{/*	<!-- End Footer -->*/}
			</div>

		</div>
	);
};

export default Panel;
