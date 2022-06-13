import React, { lazy } from 'react'
const Home = lazy(() => import('../components/pages/Home'))
const GuessTheBurn = lazy(() => import('../components/pages/GuessTheBurn'))
const GamesPage = lazy(() => import('../components/pages/GamesPage'))

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
		render: props => <GamesPage {...props} />
	}
]

export default routes