import { RouteObject, createBrowserRouter } from "react-router-dom";
import React from 'react';
import Layout from "./components/Layout";
import { PARENT_URL } from "./constants";
import WalletConnectionModal from "./components/Modal/WalletConnectionModal";
import ToolWorking from "./pages/ToolWorking";

const routerList: Array<RouteObject> =  [
	{
		path: PARENT_URL.dapp,
		element: <Layout />,
		children: [
			{
				path: `${PARENT_URL.dapp}/wallet`,
				element: <div><WalletConnectionModal open={true} handleClose={() => {}} /></div>
			},
			{
				path: `${PARENT_URL.dapp}/tool/working`,
				element: <ToolWorking />
			}
		],
	},
	{
		path: '/test',
		element: <h1>123123123</h1>
	}
]


const useInitRouter = () => {
	return createBrowserRouter(routerList)
}

export default useInitRouter;