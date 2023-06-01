import Sidebar from "../Sidebar";
import React from 'react'
import { Outlet } from "react-router-dom";
import Appbar from "../Appbar";
import Divider from "@mui/material/Divider";


// const listSidebarItem = [
// 	{
// 		title: 
// 	}
// ]

const Layout = () => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			height: '100%'
		}}>
			<Sidebar />
			<div style={{ height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
				<Appbar />
				<Divider style={{ borderColor: '#E5ECF3'}}/>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout;