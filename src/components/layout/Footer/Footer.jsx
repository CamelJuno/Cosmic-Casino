import React from 'react'
import { Typography, Box, Fab } from '@mui/material'
import imagesList from '../../../assets'
import { useTheme } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TiktokIcon from '../../common/TiktokIcon'

const Footer = () => {
	const { spacing } = useTheme()

	return (
		<footer style={{
			width: '100%',
			bottom: spacing(0),
			paddingBottom: spacing(6),
			transitionProperty: 'all',
			transitionDuration: '0.2s',
			zIndex: 3
		}}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2, pb: 2 }}>
				<img src={imagesList.Logo} alt='logoFooter' style={{
					height: 'auto',
					width: 70,
					filter: 'opacity(.7)'
				}} />
				<Box sx={{ display: 'flex', mt: 2 }}>
					<Fab size='small' href='https://discord.gg/dS7ZwNQ6PN' target='_blank' color='secondary' sx={{ mr: 2 }}>
						<FacebookIcon />
					</Fab>
					<Fab size='small' href='https://discord.gg/dS7ZwNQ6PN' target='_blank' color='secondary' sx={{ mr: 2 }}>
						<InstagramIcon />
					</Fab>
					<Fab size='small' href='https://twitter.com/WhiteWhaleNFT' target='_blank' color='secondary' sx={{ mr: 2 }}>
						<LinkedInIcon />
					</Fab>
					<Fab size='small' href='https://twitter.com/WhiteWhaleNFT' target='_blank' color='secondary' sx={{ mr: 2 }}>
						<TiktokIcon />
					</Fab>
				</Box>
			</Box>
			<Typography variant="caption" align="center" component="p">
				Terms of Service
			</Typography>
			<Typography variant="subtitle1" align="center" color='primary' component="p">
				{' © '} {new Date().getFullYear()} Mente y Conducta, All rights reserved.
			</Typography>
		</footer>
	)
}

export default Footer
