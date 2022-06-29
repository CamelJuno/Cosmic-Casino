import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@mui/material'
import imagesList from '../../../assets'
import '../../../assets/css/planetsRotation.css'
import '../../../assets/css/animationFont.css'
import '../../../assets/css/animationFont2.css'
import '../../../assets/css/fallingJuno.css'
import '../../../assets/css/flame.css'
import '../../../assets/css/fallingJuno.css'
import Stars from '../../common/Stars'
import { useTheme } from '@mui/material/styles'
import { useHistory } from 'react-router-dom'


const Banner = () => {
	const { push } = useHistory()
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
			[breakpoints.down(800)]: {
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
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 2 }}>
						$LUCK token is what fuels the fun here in Cosmos Arcade.
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 2 }}>
						Check if you're eligibile for the airdrop and depending on how
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 2 }}>
						lucky you think you are, bet on your airdrop allocation.
					</Typography><Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 2 }}>
						There's a sweet <u>Jackpot</u> waiting for you!
					</Typography>
					<Button onClick={() => push('/games')} color='primary' variant='contained' sx={{ mt: 10, borderRadius: 16, transform: 'scale(2)' }}> Entry Game </Button>
				</Box>
			</Container>
		</Container>
	)
}

export default Banner