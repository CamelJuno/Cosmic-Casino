import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
// import Header from './Header'
// import MenuApp from './Menu'
// import Footer from './Footer'
// import Stars from '../common/Stars'

const RootStyle = styled('div')({
	minHeight: '100%',
	overflow: 'hidden'
})

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'hidden',
	minHeight: '100%',
	[theme.breakpoints.up('lg')]: {

	}
}))

// ----------------------------------------------------------------------

const Layout = ({ children, window }) => {

	return (
		<RootStyle>
			{/* <Stars /> */}
			{/* <Header onOpenSidebar={() => setOpen(true)} trigger={trigger} /> */}
			{/* <MenuApp isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} /> */}
			<MainStyle>
				{children}
			</MainStyle>
			{/* <Footer /> */}
		</RootStyle>
	)
}

export default Layout