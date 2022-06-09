import React from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import imagesList from '../../../assets'
import '../../../assets/css/planetsRotation.css'
import HomeCard from '../../common/HomeCard'
import '../../../assets/css/fallingJuno.css'
import Stars from '../../common/Stars'
import { useTheme } from '@mui/material/styles'

const Banner = () => {
	const { breakpoints } = useTheme()

	return (
		<Container maxWidth={false} sx={{
			background: `url(${imagesList.Back})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			width: '100%',
			height: '100vh',
			position: 'relative',
			pb: 19,
			pt: 9,
			[breakpoints.down(1200)]: {
				height: 'auto'
			}
		}}>
			<Container maxWidth="lg" sx={{ pb: 1, pt: 2, mt: 2 }}>
				<Stars />
				<Box className="planet1" />
				<Box className="planet2" />
				<Box className="planet3" />
				<Box className="planet4" />
				<Box className="planet5" />
				<Box className="SpaceRocks" />
				<Box className="FallingStars" />
				<Box className="set">
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
					<div><img width={20} src={imagesList.Juno} /></div>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography variant="h6" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
						Welcome to
					</Typography>
					<Box component='img' src={imagesList.Title} sx={{ width: '80%' }} />
					<Typography variant="h6" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
						The First Cosmos Online Toyland
					</Typography>
				</Box>
			</Container>
			<Container maxWidth="lg" sx={{ pb: 1, pt: 5, mt: 2 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography variant="h3" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
						Entry Game
					</Typography>
				</Box>
			</Container>
		</Container>
	)
}

export default Banner

// <RootStyle onClick={() => push('/jackpot')} className={active ? "Blazing" : null} border={false} content={false} active={active} disabled={!active}>