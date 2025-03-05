import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../../components/layout/header'
import SideBar from '../../components/layout/sideBar'

const addUser = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenUser, setIsOpenUser] = useState(false);
	const [OpenAddModal, setIsAddModal] = useState(false);
	const toggleModal = () => {
		setIsAddModal(!OpenAddModal);
	};

	const [ShowSide, setIsOpenSidebar] = useState(false); // Sidebar toggle state
	const pathname = usePathname(); // Get current route

	const toggleSidebar = () => setIsOpenSidebar(!isOpen);
	const alpsetoggleSidebar = () => setIsOpenSidebar(isOpen);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setIsOpenUser(false); // Close isOpenUser when isOpen is toggled
	};

	const toggleUserDropdown = () => {
		setIsOpenUser(!isOpenUser);
		setIsOpen(false); // Close isOpen when isOpenUser is toggled
	};
	return (
		<>
			<section className="AdminPage hideSidebar">
				<div className="flex align-start justify-between">
					
					<SideBar />
					<div className="pageBody flex-auto w-full bg-[#f2f2f2] min-h-[100vh] ms-auto">
					<Header />
						<section className="w-full lg:p-6 md:p-6 sm:p-3 p-3">
							<div className="flex flex-wrap">
								<div className="flex-auto w-full">
									<div
										className="w-full lg:max-w-[50vw] md:max-w-[50vw] max-w-[100vw] m-auto relative mb-0 rounded-lg bg-white shadow-[0_6px_16px_2px_rgba(0,0,0,0.05)] border-0 overflow-hidden">
										<div
											className="card-header px-4 flex items-center justify-between bg-white py-4 border-b-1 border-[#cdcdcd]">
											<div
												className="w-full flex-auto flex items-center xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap justify-between gap-3">
												<div className="flex items-center">
													<div>
														<h4 className="text-md mb-0 font-bold">Add User</h4>
														<nav aria-label="breadcrumb">
															<ol className="flex gap-2 items-center m-0">
																<li><a href="#"
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">Dashboard</a>
																</li>
																<li
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">
																	/</li>
																<li><a href="#"
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">User Managment</a>
																</li>
																<li
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">
																	/</li>
																<li className="text-sm font-normal m-0 text-[#a3002f]"
																	aria-current="page">
																	Add User</li>
															</ol>
														</nav>
													</div>
												</div>
											</div>
										</div>
										<div className='py-4 px-4'>

											<div className="lg:max-h-[calc(100vh-235px)] md:max-h-[calc(100vh-235px)] overflow-auto px-4">
												<div className="grid  grid-cols-1 xl:grid-cols-3 gap-4">
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="User Name" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">User Name</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="User Email" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">User Email</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Phone" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Phone</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Designation" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Designation</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Phone" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Phone</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Designation" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Designation</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Phone" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Phone</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Designation" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Designation</label>
													</div>
													<div className="w-full relative">
														<select
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															aria-label="Default select example">
															<option selected>Selec User Status</option>
															<option value="1">One</option>
															<option value="2">Two</option>
															<option value="3">Three</option>
														</select>
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Is Active</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Designation" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Designation</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Phone" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Phone</label>
													</div>
													<div className="w-full relative">
														<input type="text"
															className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-3xl px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
															id="floatingInput" placeholder="Designation" />
														<label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Designation</label>
													</div>
													<div className='w-full'>
														<button className="btn btn-primary text-white">
															Add User
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</>
	)
}

export default addUser