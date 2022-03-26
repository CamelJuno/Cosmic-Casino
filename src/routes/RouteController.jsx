import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const RouteController = props => {
	const { component: Component, isAuthenticated, ...rest } = props

	const [isTokenOk, setIsTokenOk] = useState(true)

	const init = () => {
		if (localStorage.getItem("isAuth") !== 'yes') {
			setIsTokenOk(false)
		} else {
			setIsTokenOk(true)
		}
	}
	useEffect(init, [])

	return isTokenOk ? <Component {...rest} /> : <Redirect to='/login' />
}

export default RouteController