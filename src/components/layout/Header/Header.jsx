import React, { useContext } from 'react'
import ThemeContext from '../../../theme/themeContext'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material/styles'
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Avatar, Button, Fab } from '@mui/material'
import { MHidden } from '../@material-extend'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import imagesList from '../../../assets'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import { useHistory } from 'react-router-dom'
import onScroll from '../../../helpers/onScroll'

// ----------------------------------------------------------------------
const APPBAR_MOBILE = 60
const APPBAR_DESKTOP = 60

const ToolbarStyle = styled(Toolbar)(({ theme, trigger }) => ({
	minHeight: APPBAR_MOBILE,
	transition: 'all .2s ease-in-out',
	background: trigger ? theme.palette.background.paper : 'transparent',
	[theme.breakpoints.up('lg')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5)
	}
}))

// ----------------------------------------------------------------------

const Header = ({ onOpenSidebar, trigger }) => {
	const { palette } = useTheme()
	const { dispatchTheme } = useContext(ThemeContext)
	const { push } = useHistory()

	const onChangeTheme = () => {
		var payload = { mode: palette.mode === 'light' ? 'dark' : 'light' }
		dispatchTheme(['theme', payload])
		localStorage.setItem('mode', palette.mode === 'light' ? 'dark' : 'light')
	}

	return (
		<AppBar elevation={trigger ? 4 : 0} position='fixed' color='transparent'>
			<ToolbarStyle trigger={trigger}>
				<MHidden width="mdUp">
					<IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: "#ffffff" }}>
						<MenuOutlinedIcon />
					</IconButton>
				</MHidden>
				<Avatar sx={{ mr: 1, width: 70, height: '100%' }} src={imagesList.Logo} />
				<Box sx={{ flexGrow: 1 }} />
				<Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
					<MHidden width="mdDown">
						<Button onClick={() => push('/')} variant='text' color='inherit' sx={{ color: trigger && palette.mode === 'light' ? "#000000" : "#ffffff" }}>Inicio</Button>
						<Button onClick={() => onScroll('#talleres')} variant='contained' color='primary'>Talleres</Button>
						<Button variant='contained' color='primary'>Terapia</Button>
						<Button variant='contained' color='primary'>Blog</Button>
						<Button variant='contained' color='primary'>¿Quién soy?</Button>
					</MHidden>
					<IconButton onClick={onChangeTheme} sx={{ mr: 1, color: trigger && palette.mode === 'light' ? "#000000" : "#ffffff" }}>
						{palette.mode === "dark" ? <ModeNightOutlinedIcon /> : <WbSunnyOutlinedIcon />}
					</IconButton>
				</Stack>
			</ToolbarStyle>
		</AppBar>
	)
}

Header.propTypes = {
	onOpenSidebar: PropTypes.func
}

export default Header