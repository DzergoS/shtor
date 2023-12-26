import React from 'react';
import './Products.css'

import Img4 from "../../../assets/img4.jpg"

const Products = () => {
	return (
		<div className="content container-fluid">
			{/*!--Page Header --*/}
			<div className="page-header">
				<div className="row align-items-center mb-3">
					<div className="col-sm mb-2 mb-sm-0">
						<h1 className="page-header-title">Products <span
							className="badge bg-soft-dark text-dark ms-2">72,031</span></h1>

						<div className="mt-2">
							<a className="text-body me-3" href="javascript:;" data-bs-toggle="modal"
							   data-bs-target="#exportProductsModal">
								<i className="bi-download me-1"></i> Export
							</a>
							<a className="text-body" href="javascript:;" data-bs-toggle="modal"
							   data-bs-target="#importProductsModal">
								<i className="bi-upload me-1"></i> Import
							</a>
						</div>
					</div>
					{/*!--End Col --*/}

					<div className="col-sm-auto">
						<a className="btn btn-primary" href="./ecommerce-add-product.html">Add product</a>
					</div>
					{/*!--End Col --*/}
				</div>
				{/*!--End Row --*/}

				{/*!--Nav Scroller --*/}
				<div className="js-nav-scroller hs-nav-scroller-horizontal">
          <span className="hs-nav-scroller-arrow-prev" style={{display: "none"}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="bi-chevron-left"></i>
            </a>
          </span>

					<span className="hs-nav-scroller-arrow-next" style={{display: "none"}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="bi-chevron-right"></i>
            </a>
          </span>

					{/*!--Nav--*/}
					<ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" href="#">All products</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Archived</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Publish</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1"
							   aria-disabled="true">Unpublish</a>
						</li>
					</ul>
					{/*!--End Nav --*/}
				</div>
				{/*!--End Nav Scroller --*/}
			</div>
			{/*!--End Page Header --*/}

			<div className="row justify-content-end mb-3">
				<div className="col-lg">
					{/*!--Datatable Info --*/}
					<div id="datatableCounterInfo" style={{display: "none"}}>
						<div className="d-sm-flex justify-content-lg-end align-items-sm-center">
              <span className="d-block d-sm-inline-block fs-5 me-3 mb-2 mb-sm-0">
                <span id="datatableCounter">0</span>
                Selected
              </span>
							<a className="btn btn-outline-danger btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
								<i className="bi-trash"></i> Delete
							</a>
							<a className="btn btn-white btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
								<i className="bi-archive"></i> Archive
							</a>
							<a className="btn btn-white btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
								<i className="bi-upload"></i> Publish
							</a>
							<a className="btn btn-white btn-sm mb-2 mb-sm-0" href="javascript:;">
								<i className="bi-x-lg"></i> Unpublish
							</a>
						</div>
					</div>
					{/*!--End Datatable Info --*/}
				</div>
			</div>
			{/*!--End Row --*/}

			{/*!--Card--*/}
			<div className="card">
				{/*!--Header--*/}
				<div className="card-header card-header-content-md-between">
					<div className="mb-2 mb-md-0">
						<form>
							{/*!--Search--*/}
							<div className="input-group input-group-merge input-group-flush">
								<div className="input-group-prepend input-group-text">
									<i className="bi-search"></i>
								</div>
								<input id="datatableSearch" type="search" className="form-control"
									   placeholder="Search users" aria-label="Search users"/>
							</div>
							{/*!--End Search --*/}
						</form>
					</div>

					<div className="d-grid d-sm-flex gap-2">
						<button className="btn btn-white" type="button" data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasEcommerceProductFilter"
								aria-controls="offcanvasEcommerceProductFilter">
							<i className="bi-filter me-1"></i> Filters
						</button>

						{/*!--Dropdown--*/}
						<div className="dropdown">
							<button type="button" className="btn btn-white w-100" id="showHideDropdown"
									data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
								<i className="bi-table me-1"></i> Columns <span
								className="badge bg-soft-dark text-dark rounded-circle ms-1">6</span>
							</button>

							<div className="dropdown-menu dropdown-menu-end dropdown-card"
								 aria-labelledby="showHideDropdown" style={{width: "15rem"}}>
								<div className="card card-sm">
									<div className="card-body">
										<div className="d-grid gap-3">
											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_product">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Product</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_product" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_type">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Type</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_type" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_vendor">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Vendor</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_vendor"/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_stocks">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Stocks</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_stocks" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_sku">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">SKU</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_sku" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch" htmlFor="toggleColumn_price">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Price</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_price" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch"
												   htmlFor="toggleColumn_quantity">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Quantity</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_quantity"/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}

											{/*!--Form Switch --*/}
											<label className="row form-check form-switch"
												   htmlFor="toggleColumn_variants">
                        <span className="col-8 col-sm-9 ms-0">
                          <span className="me-2">Variants</span>
                        </span>
												<span className="col-4 col-sm-3 text-end">
                          <input type="checkbox" className="form-check-input" id="toggleColumn_variants" checked/>
                        </span>
											</label>
											{/*!--End Form Switch --*/}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*!--End Dropdown --*/}
					</div>
				</div>
				{/*!--End Header --*/}

				{/*!--Table--*/}
				<div className="table-responsive datatable-custom">
					<table id="datatable"
						   className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
						<thead className="thead-light">
						<tr>
							<th scope="col" className="table-column-pe-0">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value=""
										   id="datatableCheckAll"/>
									<label className="form-check-label">
									</label>
								</div>
							</th>
							<th className="table-column-ps-0">Product</th>
							<th>Type</th>
							<th>Vendor</th>
							<th>Stocks</th>
							<th>SKU</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Variants</th>
							<th>Actions</th>
						</tr>
						</thead>

						<tbody>

						<tr>
							<td className="table-column-pe-0">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value=""
										   id="datatableCheckAll1"/>
									<label className="form-check-label" htmlFor="datatableCheckAll1"></label>
								</div>
							</td>
							<td className="table-column-ps-0">
								<a className="d-flex align-items-center" href="./ecommerce-product-details.html">
									<div className="flex-shrink-0">
										<img className="avatar avatar-lg" src={Img4}
											 alt="Image Description"/>
									</div>
									<div className="flex-grow-1 ms-3">
										<h5 className="text-inherit mb-0">Photive wireless speakers</h5>
									</div>
								</a>
							</td>
							<td>Electronics</td>
							<td>Google</td>
							<td>
								<div className="form-check form-switch">
									<input className="form-check-input" type="checkbox" id="stocksCheckbox1"
										   checked/>
									<label className="form-check-label" htmlFor="stocksCheckbox1"></label>
								</div>
							</td>
							<td>2384741241</td>
							<td>$65</td>
							<td>60</td>
							<td>2</td>
							<td>
								<div className="btn-group" role="group">
									<a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
										<i className="bi-pencil-fill me-1"></i> Edit
									</a>

									{/*!--Button Group --*/}
									<div className="btn-group">
										<button type="button"
												className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty"
												id="productsEditDropdown1" data-bs-toggle="dropdown"
												aria-expanded="false"></button>

										<div className="dropdown-menu dropdown-menu-end mt-1"
											 aria-labelledby="productsEditDropdown1">
											<a className="dropdown-item" href="#">
												<i className="bi-trash dropdown-item-icon"></i> Delete
											</a>
											<a className="dropdown-item" href="#">
												<i className="bi-archive dropdown-item-icon"></i> Archive
											</a>
											<a className="dropdown-item" href="#">
												<i className="bi-upload dropdown-item-icon"></i> Publish
											</a>
											<a className="dropdown-item" href="#">
												<i className="bi-x-lg dropdown-item-icon"></i> Unpublish
											</a>
										</div>
									</div>
									{/*!--End Button Group --*/}
								</div>
							</td>
						</tr>

						</tbody>
					</table>
				</div>
				{/*!--End Table --*/}

				{/*!--Footer--*/}
				<div className="card-footer">
					<div className="row justify-content-center justify-content-sm-between align-items-sm-center">
						<div className="col-sm mb-2 mb-sm-0">
							<div
								className="d-flex justify-content-center justify-content-sm-start align-items-center">
								<span className="me-2">Showing:</span>

								{/*!--Select--*/}
								<div className="tom-select-custom">
									<select id="datatableEntries"
											className="js-select form-select form-select-borderless w-auto"
											autoComplete="off" data-hs-tom-select-options='{
                            "searchInDropdown": false,
                            "hideSearch": true
                          }'>
										<option value="12">12</option>
										<option value="14" selected>14</option>
										<option value="16">16</option>
										<option value="18">18</option>
									</select>
								</div>
								{/*!--End Select --*/}

								<span className="text-secondary me-2">of</span>

								{/*!--Pagination Quantity --*/}
								<span id="datatableWithPaginationInfoTotalQty"></span>
							</div>
						</div>
						{/*!--End Col --*/}

						<div className="col-sm-auto">
							<div className="d-flex justify-content-center justify-content-sm-end">
								{/*!--Pagination--*/}
								<nav id="datatablePagination" aria-label="Activity pagination"></nav>
							</div>
						</div>
						{/*!--End Col --*/}
					</div>
					{/*!--End Row --*/}
				</div>
				{/*!--End Footer --*/}
			</div>
			{/*!--End Card --*/}
		</div>
	);
};

export default Products;
