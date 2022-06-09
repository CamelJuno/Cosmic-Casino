import React, { lazy } from 'react'
const Home = lazy(() => import('../components/pages/Home'))
const GuessTheBurn = lazy(() => import('../components/pages/GuessTheBurn'))

const routes = [
	{
		path: "/",
		exact: true,
		render: props => <Home {...props} />
	},
	{
		path: "/jackpot",
		exact: true,
		render: props => <GuessTheBurn {...props} />
	},
	{
		path: "/games",
		exact: true,
		render: props => <Gaming {...props} />
	}
]

export default routes