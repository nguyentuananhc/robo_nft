import { RouteObject, createBrowserRouter } from "react-router-dom";
import React from 'react';
import Layout from "./components/Layout";
import { PARENT_URL } from "./constants";

const routerList: Array<RouteObject> =  [
	{
		path: PARENT_URL.dapp,
		element: <Layout />,
		children: [
			{
				path: `${PARENT_URL.dapp}/wallet`,
				element: <h1>Wallet</h1>
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