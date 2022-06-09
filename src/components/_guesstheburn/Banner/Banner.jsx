import React, { useEffect, useState } from 'react'
import { Container, Box, Stack, Button, IconButton, TextField, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import imagesList from '../../../assets'
import '../../../assets/css/animationFont.css'
import '../../../assets/css/animationFont2.css'
import '../../../assets/css/planetsRotation.css'
import '../../../assets/css/fallingJuno.css'
import '../../../assets/css/flame.css'
import Stars from '../../common/Stars'
import { Oval } from '../../../helpers/react-loader-spinner/src/index'
import axios from 'axios'
import { styled } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

const StyledTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		backgroundColor: "transparent",
		color: '#ffffff',
		fontWeight: 'bold',
		width: 120,
		transform: 'scale(1.2)',
		zIndex: 999999
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none'
	},
})

const Banner = () => {
	const { breakpoints } = useTheme()
	const [openDialog, setOpenDialog] = useState(false)
	const [jackpotAmount, setJackpotAmount] = useState(100000)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)
	const [betting, setBetting] = useState(false)
	const [texto, setTexto] = useState(null)
	const [body, setBody] = useState({ input: '' })

	const init = async () => {
		setTexto(jackpotAmount.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ","))
	}

	const onChange = ({ target: { name, value } }) => {
		const re = /\d+/g;
		if (re.test(value) || value === '') {
			value = value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			setBody({
				...body,
				[name]: value
			})
		}
	}

	const startBetting = () => {
		setBetting(true)
		setSuccess(true)
		setError(false)
		setOpenDialog(true)
		setTimeout(() => setOpenDialog(false), 5000)
		setBetting(false)
	}

	useEffect(init, [])
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
			[breakpoints.down(1500)]: {
				height: 'auto'
			}
		}}>
			<Stars />
			<Container maxWidth="lg" sx={{ pb: 1, pt: 2, mt: 5 }}>
				<Dialog
					maxWidth='xs'
					transitionDuration={500}
					hideBackdrop={true}
					sx={{ position: 'absolute', top: '-60%', left: '80%' }}
					open={openDialog}
					onClose={() => setOpenDialog(false)}
				>

					<DialogContent className={error ? 'neonButtonWarning' : 'neonButton'} onClick={() => setOpenDialog(false)}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								width: '100%'
							}}
						>
							<Box noValidate>
								{success &&
									<Typography color='green' variant='subtitle2' sx={{ fontWeight: 'bold' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									</Typography>
								}
								{error &&
									<Typography color='red' variant='subtitle2' sx={{ fontWeight: 'bold' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									</Typography>
								}
							</Box>
							{success &&
								<CheckIcon sx={{ color: 'green' }} />
							}
							{error &&
								<WarningAmberIcon sx={{ color: 'red' }} />
							}
						</Box>
					</DialogContent>
				</Dialog>
				<Box className="planet6" />
				<Box className="planet1" />
				<Box className="planet2" />
				<Box className="planet3" />
				<Box className="planet4" />
				<Box className="planet5" />
				<Box className="planet6" />
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
					<Stack direction='row' spacing={2}>
						<div className="fire-container">
							<div className="fire-left">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-main">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-right">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-bottom">
								<div className="main-fire"></div>
							</div>
						</div>
						<Typography variant="h3" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
							Guess The Burn
						</Typography>
						<div className="fire-container">
							<div className="fire-left">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-main">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-right">
								<div className="main-fire"></div>
								<div className="particle-fire"></div>
							</div>
							<div className="fire-bottom">
								<div className="main-fire"></div>
							</div>
						</div>
					</Stack>
					<Typography variant='h1' className='text' sx={{ mt: 3 }} align='center'>
						{`${texto} Junø Jackpot`}
					</Typography>
					<Typography variant="h3" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 5 }}>
						Explanation
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff", mt: 2 }}>
						Guess the final amount of RAW to burn
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
						Bet window is from Mar 7 to Mar 24
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
						Closest bet wins the Jackpot
					</Typography>
					<Stack sx={{ fontWeight: 'bold', mt: 9 }} direction='row' spacing={1} alignItems='center' justifyContent={'center'}>
						<Typography variant="h4" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
							Final
						</Typography>
						<Typography variant="h4" sx={{ fontWeight: 'bold', color: "#FFCF52" }}>
							RAW
						</Typography>
						<Typography variant="h4" sx={{ fontWeight: 'bold', color: "#ffffff" }}>
							Burned
						</Typography>
					</Stack>
					<StyledTextField align='center' className='text2'
						type='text'
						placeholder='Your Guess'
						inputProps={{ maxLength: 10, style: { textAlign: 'center' } }}
						variant='outlined'
						size='small'
						margin="normal"
						name='input'
						value={body.input}
						onChange={onChange}
					/>
					{!betting &&
						<Button onClick={startBetting} color='primary' variant='contained' sx={{ mt: 4, borderRadius: 16, transform: 'scale(1.5)' }}>Bet For 10 Juno</Button>
					}
					{betting &&
						<Button disabled={true} color='primary' variant='contained' sx={{ mt: 4, borderRadius: 16, transform: 'scale(1.5)' }}><Oval color="#FFFFFF" height={20} width={20} /></Button>
					}
				</Box>
			</Container>
		</Container>
	)
}

export default Banner
