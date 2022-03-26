import React from 'react'
// material
import { styled, alpha } from '@mui/material/styles'
import { Typography, Box, CardMedia, Button, Stack } from '@mui/material'
import MainCard from '../MainCard'
import './lamp.css'
import imagesList from '../../../assets'
import { useHistory } from 'react-router-dom'
// ----------------------------------------------------------------------


const RootStyle = styled(MainCard)(({ theme, active }) => ({
	backgroundImage: `url(${imagesList.GuessTheBurn})`,
	backgroundSize: '150%',
	backgroundPosition: 'center',
	textAlign: 'center',
	boxShadow: 'rgba(0, 0, 0, 0.56) 0px 2px 7px 1px',
	paddingBottom: theme.spacing(2),
	overflow: 'hidden',
	position: 'relative',
	borderRadius: 16,
	width: '100%',
	transition: '.5s',
	height: 250,
	zIndex: 2,
	...(!active && {
		backdropFilter: 'blur(10px)',
		background: 'rgba(255,255,255,.1)'
	})
}))

const BoxStyle = styled(Box)(({ theme }) => ({
	transition: '.6s',
	zIndex: 2,
	paddingLeft: 19,
	paddingRight: 0,
	position: 'absolute',
	top: 10,
	right: -10
}))
// ----------------------------------------------------------------------

const HomeCard = ({ title, subtitle, image, active, alive, mes, icon }) => {
	const { push } = useHistory()

	return (
		<RootStyle onClick={() => push('/jackpot')} className={active ? "Blazing" : null} border={false} content={false} active={active} disabled={!active}>
			<Typography variant="h4" align='center' sx={{ color: active ? '#ffffff' : '#c769c9', fontWeight: 'bold', mt: 6 }}>{title}</Typography>
			<Typography variant="h4" align='center' sx={{ color: active ? '#ffffff' : '#c769c9', mt: 4 }}>{subtitle}</Typography>
			<BoxStyle>
				<Box component='img' src={image} sx={{ width: '35%' }} />
			</BoxStyle>
			<Stack direction='row' spacing={0.5} alignItems='center' sx={{ mt: 5, pl: 2 }}>
				<Box component='img' src={icon} sx={{ width: '5%', height: '5%', mt: 0 }} />
				<Typography variant='subtitle1' color='white'>{alive}</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white'>&nbsp;</Typography>
				<Typography variant='subtitle1' color='white' >{mes}</Typography>
			</Stack>
			{/* {active && (
				<div className="lamp">
					<div className="lava">
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob"></div>
						<div className="blob top"></div>
						<div className="blob bottom"></div>
					</div>
				</div>
			)} */}
		</RootStyle>
	)
}

export default HomeCard