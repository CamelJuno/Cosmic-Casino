import React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
	Paper,
	Input,
	Slide,
	Button,
	InputAdornment,
	ClickAwayListener,
	IconButton
} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const SearchbarStyle = styled(Paper)(({ theme }) => ({
	top: 0,
	left: 0,
	zIndex: 99,
	width: '100%',
	display: 'flex',
	position: 'absolute',
	alignItems: 'center',
	height: 64,
	padding: theme.spacing(0, 3),
	background: '#212121',
	[theme.breakpoints.up('md')]: {
		height: 64,
		padding: theme.spacing(0, 5)
	}
}))

// ----------------------------------------------------------------------

const Searchbar = () => {
	const [isOpen, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen((prev) => !prev)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<ClickAwayListener onClickAway={handleClose}>
			<div>
				{!isOpen && (
					<IconButton onClick={handleOpen}>
						<SearchOutlinedIcon />
					</IconButton>
				)}

				<Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
					<SearchbarStyle elevation={8}>
						<Input
							autoFocus
							fullWidth
							disableUnderline
							placeholder="Search…"
							startAdornment={
								<InputAdornment position="start">
									<SearchOutlinedIcon />
								</InputAdornment>
							}
							sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
						/>
						<Button variant="radius" onClick={handleClose}>
							Search
						</Button>
					</SearchbarStyle>
				</Slide>
			</div>
		</ClickAwayListener>
	)
}

export default Searchbar