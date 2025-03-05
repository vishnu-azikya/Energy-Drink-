import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Header from '../../components/layout/header'
import SideBar from '../../components/layout/sideBar'


const dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenUser, setIsOpenUser] = useState(false);

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
					<Header/>
						<section className="w-full lg:p-6 md:p-6 p-3">
							<div className="flex flex-wrap">
								<div className="w-full flex-auto">
									<h4 className="text-xl text-[#212529] font-[600] mb-1">Dashboard</h4>
									<p className="text-md text-[#6C757D] font-normal m-0">An any way to manage sales with
										care and precision</p>
								</div>
							</div>
							<div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full mt-6 pt-2 g-3">
								<div className="w-full">
									<div
										className="h-full cursor-pointer border-[1px] border-[#bfbfbf] lg:p-6 p-4 rounded-3xl hover:translate-y-[-10px] hover:skew-x-[-2deg] hover:skew-y-2 transition duration-300 transform translate-x-0 translate-y-0 skew-x-0 skew-y-0 bg-[linear-gradient(160deg,#2A2D6D_0%,#6D96CE_130%)]">
										<h5 className="text-base text-[#fff] font-normal mb-6">Update</h5>
										<p className="m-0 text-sm text-[#fff] font-normal mb-1">Feb 12th 2025</p>
										<h4 className="mb-0 text-xl font-medium track-[0.2px] text-[#fff]">Sales revenue
											increased 40% in 1 week</h4>

										<a className="mt-4 mb-0 flex items-center gap-1 decoration-auto text-[#fff] font-semibold text-sm tracking-wide"
											href="#">See Statics</a>
									</div>
								</div>
								<div className="w-full">
									<div
										className="h-full cursor-pointer border-[1px] border-[#bfbfbf] lg:p-6 p-4 rounded-3xl hover:translate-y-[-10px] hover:skew-x-[-2deg] hover:skew-y-2 transition duration-300 transform translate-x-0 translate-y-0 skew-x-0 skew-y-0 hover:bg-[linear-gradient(160deg,#2A2D6D_0%,#6D96CE_130%)] cardHover">
										<h5 className="text-base text-[#2a2529] font-normal mb-6">Net Income</h5>
										<p className="m-0 text-sm text-[#212529] font-normal mb-1">Feb 12th 2025</p>
										<h4 className="mb-0 text-xl font-medium track-[0.2px] text-[#3a3a3a]">Sales revenue
											increased 40% in 1 week</h4>

										<a className="mt-4 mb-0 flex items-center decoration-auto text-dark font-semibold text-sm tracking-wide text-dark gap-2"
											href="#">
											<span className="text-[#198754] flex items-center gap-2">
												<Icon style={{ fontSize: '25px' }}
													icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
												35%</span> from last month
										</a>
									</div>
								</div>
								<div className="w-full">
									<div
										className="h-full cursor-pointer border-[1px] border-[#bfbfbf] lg:p-6 p-4 rounded-3xl hover:translate-y-[-10px] hover:skew-x-[-2deg] hover:skew-y-2 transition duration-300 transform translate-x-0 translate-y-0 skew-x-0 skew-y-0 hover:bg-[linear-gradient(160deg,#2A2D6D_0%,#6D96CE_130%)] cardHover">
										<h5 className="text-base text-[#2a2529] font-normal mb-6">Tottal Return</h5>
										<h2 className="lg:text-6xl md:text-5xl text-4xl text-dark font-bold"><sup>$</sup>193.00</h2>

										<a className="mt-4 mb-0 flex items-center decoration-auto text-dark font-semibold text-sm tracking-wide text-dark gap-2"
											href="#">
											<span className="text-[#dc3545] flex items-center gap-2">
												<Icon style={{ fontSize: '25px' }}
													icon="streamline:money-graph-arrow-decrease-down-stats-graph-descend-right-arrow" />
												24%</span> from last month</a>
									</div>
								</div>
								<div className="w-full">
									<div
										className="h-full cursor-pointer border-[1px] border-[#bfbfbf] lg:p-6 p-4 rounded-3xl hover:translate-y-[-10px] hover:skew-x-[-2deg] hover:skew-y-2 transition duration-300 transform translate-x-0 translate-y-0 skew-x-0 skew-y-0 hover:bg-[linear-gradient(160deg,#2A2D6D_0%,#6D96CE_130%)] cardHover">
										<h5 className="text-base text-[#2a2529] font-normal mb-6">Update</h5>
										<p className="m-0 text-sm text-[#212529] font-normal mb-1">Feb 12th 2025</p>
										<h4 className="mb-0 text-xl font-medium track-[0.2px] text-[#3a3a3a]">Sales revenue
											increased 40% in 1 week</h4>

										<a className="mt-4 mb-0 flex items-center gap-1 decoration-auto text-[#292e72] font-semibold text-sm tracking-wide"
											href="#">See Statics</a>
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

export default dashboard