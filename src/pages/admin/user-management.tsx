import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import homeOutline from '@iconify-icons/mdi/home-outline';
import siteLogo from '../../../public/logo.png';
import UserIcon from '../../../public/user.jpeg';
import Image from "next/image";
import Header from '../../components/layout/header'
import SideBar from '../../components/layout/sideBar'

const dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenUser, setIsOpenUser] = useState(false);
	const [OpenAddModal, setIsAddModal] = useState(false);
	const toggleModal = () => {
		setIsAddModal(!OpenAddModal);
	};

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
					<SideBar/>
					<div className="pageBody flex-auto w-full bg-[#f2f2f2] min-h-[100vh] ms-auto">
					<Header />
						<section className="w-full lg:p-6 md:p-6 sm:p-3 p-3">
							<div className="flex flex-wrap">
								<div className="flex-auto w-full">
									<div
										className="w-full relative mb-0 rounded-lg bg-white shadow-[0_6px_16px_2px_rgba(0,0,0,0.05)] border-0 m-0 overflow-hidden">
										<div
											className="card-header px-4 flex items-center justify-between bg-white py-4 border-b-1 border-[#cdcdcd]">
											<div
												className="w-full flex-auto flex items-center xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap justify-between gap-3">
												<div className="flex items-center">
													<div>
														<h4 className="text-md mb-0 font-bold">User Management</h4>
														<nav aria-label="breadcrumb">
															<ol className="flex gap-2 items-center m-0">
																<li><a href="#"
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">Dashboard</a>
																</li>
																<li
																	className="text-sm font-normal m-0 text-[#6C757D] text-decoration-none">
																	/</li>
																<li className="text-sm font-normal m-0 text-[#a3002f]"
																	aria-current="page">
																	User Management</li>
															</ol>
														</nav>
													</div>
												</div>
												<div
													className="TableFilter lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap flex items-center gap-4">
													<input type="date"
														className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none py-1 border-solid rounded-full px-3 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
														placeholder="Select Order Date" />
													<select
														className="border-[1px] flex-auto floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none py-1 border-solid rounded-full px-3 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"

														aria-label="Default select example">
														<option selected>Selec Order Statud</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
													<select
														className="border-[1px] flex-auto floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none py-1 border-solid rounded-full px-3 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
														aria-label="Default select example">
														<option selected>Selec User Status</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>

													<button
														className="btn btn-primary text-nowrap !rounded-md cursor-pointer text-white !py-2 min-h-auto rounded-3 !px-3 !h-auto" onClick={toggleModal}>+
														Create
														User</button>
													<button
														className="btn btn-success text-nowrap !rounded-md cursor-pointer !py-2 min-h-auto rounded-3 !px-3 !h-auto">Export
														as
														CSV</button>
												</div>
											</div>
										</div>
										<div className="pb-4 py-0">
											<div className="max-h-[calc(100vh-220px)] overflow-auto px-4">
												<table className="table w-full m-0">
													<thead>
														<tr>
															<th
																className="text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																<input type="checkbox" name="" id="" />
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Contact Name
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Email
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Phone
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Email
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Phone
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Designation
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Designation
															</th>
															<th
																className="text-nowrap text-left border-b-1 border-[#efefef] px-4 py-[13.6px] !pt-6 text-[13.6px] font-medium text-[#212B37] leading-[19.88px] align-middle">
																Action
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
														<tr>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<input type="checkbox" name="" id="" />
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Jhon Doe
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																jhon.doe@example.com
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																1678-28993-223
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																Manager
															</td>
															<td
																className="text-[#212B37] text-[13px] font-normal px-4 py-[13.6px] align-middle !border-b-[#EFEFEF] border-b">
																<div
																	className="flex actionButton cursor-pointer items-center gap-2">
																	<button
																		className="bg-[#238f0036] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#238f00] rounded-md cursor-pointer hover:bg-[#238f00] hover:text-white">
																		<Icon
																			icon="material-symbols:edit-outline" />
																	</button>
																	<button
																		className="bg-[rgb(163_0_47_/21%)] border-none h-8 w-8 flex items-center justify-center text-[18px] text-[#a3002f] rounded-md hover:bg-[#a3002f] cursor-pointer hover:text-white">
																		<Icon
																			icon="material-symbols:delete-outline" />
																	</button>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>

			{OpenAddModal && (
				<div className='bg-[#0000009e] transition-all duration-100 w-full h-full fixed top-0 left-0 z-50 flex lg:items-center md:items-start items-start justify-end overflow-hidden'>
					<div className='bg-[#fff] p-0 w-full max-w-md rounded-none min-h-screen'>
						<div className='py-4 px-5 border-b-[1px] border-[#cdcdcd] flex items-center justify-between'>
							<h4 className='lg:text-xl font-bold m-0 md:text-xl text-xl'>Create User</h4>
							<Icon icon="iconamoon:close" className="text-2xl cursor-pointer" onClick={toggleModal} />
						</div>
						<div className='py-4 px-4'>
							<div className="grid  grid-cols-1 xl:grid-cols-1 gap-4">
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
			)}
		</>
	)
}

export default dashboard