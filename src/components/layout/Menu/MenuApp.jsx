import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { Box, Drawer, Typography, Stack } from '@mui/material'
// components
import imagesList from '../../../assets'
import Scrollbar from '../Scrollbar/Scrollbar'
import NavSection from '../NavSection/NavSection'
import { MHidden } from '../@material-extend'
//
import sidebarConfig from './SidebarConfig'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		width: DRAWER_WIDTH
	}
}))

// ----------------------------------------------------------------------

const MenuApp = ({ isOpenSidebar, onCloseSidebar }) => {
	const { pathname } = useLocation()
	const { palette } = useTheme()

	const init = () => {
		if (isOpenSidebar) {
			onCloseSidebar()
		}
	}

	useEffect(init, [pathname])

	const renderContent = (
		<Scrollbar
			sx={{
				height: '100%',
				'& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
			}}
		>
			<Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
				<Stack
					alignItems="center"
					spacing={3}
					sx={{
						p: 2.5,
						pt: 5,
						borderRadius: 2,
						position: 'relative'
					}}
				>
					<Box component="img" src={imagesList.Logo} sx={{ width: 100, position: 'absolute', top: -50 }} />
					<Box sx={{ textAlign: 'center' }}>
						<Typography gutterBottom variant="h6">
							Mente y Conducta
						</Typography>
						<Typography variant="body2">
							web
						</Typography>
					</Box>
				</Stack>
			</Box>
			<NavSection navConfig={sidebarConfig} />
			<Box sx={{ flexGrow: 1 }} />
		</Scrollbar>
	)

	return (
		<RootStyle>
			<MHidden width="lgUp">
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							background: palette.background.paper,
						}
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>
		</RootStyle>
	)
}

MenuApp.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func
}

export default MenuApp