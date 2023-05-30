import Sidebar from "../Sidebar";
import React from 'react'
import { Outlet } from "react-router-dom";


// const listSidebarItem = [
// 	{
// 		title: 
// 	}
// ]

const Layout = () => {
	return (
		<div>
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout;