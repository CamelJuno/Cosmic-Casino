import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from './routes/RouteUtils'
import routes from './routes/routes'
import { CssBaseline, LinearProgress } from '@mui/material'
import Layout from './components/layout'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'

const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Suspense fallback={<LinearProgress color='primary' />}>
					<Layout>
						{renderRoutes(routes)}
					</Layout>
				</Suspense>
			</Router>
		</ThemeProvider>
	)
}

export default App