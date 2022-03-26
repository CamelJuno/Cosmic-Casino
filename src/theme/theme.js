import { createTheme } from '@mui/material/styles'
import Bebas from '../assets/fonts/font2.woff2'

const theme = createTheme({
	palette: {
		primary: {
			main: '#CD1AA7',
			contrastText: '#ffffff'
		},
		secondary: {
			main: "#AF7AC5",
			contrastText: '#ffffff'
		},
		neutral: {
			main: '#64748B',
			contrastText: '#ffffff'
		},
		mode: 'light'
	},
	typography: {
		fontFamily: 'BebasNeue, Regular',
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						border: `2px dashed #CD1AA7`,
						color: '#CD1AA7'
					}
				},
				{
					props: { variant: 'dashed', color: 'secondary' },
					style: {
						border: `2px dashed #AF7AC5`,
						color: '#AF7AC5'
					}
				},
				{
					props: { variant: 'radius' },
					style: {
						color: '#ffffff',
						textTransform: 'none',
						backgroundColor: '#CD1AA7',
						borderRadius: 16,
						transition: 'all .2s ease-in-out'
					}
				},
				{
					props: { variant: 'radius', color: 'secondary' },
					style: {
						backgroundColor: '#AF7AC5',
						color: '#ffffff',
						borderRadius: 16,
						textTransform: 'none',
						transition: 'all .2s ease-in-out'
					}
				},
				{
					props: { variant: 'radiusOutlined' },
					style: {
						backgroundColor: 'transparent',
						borderRadius: 16,
						textTransform: 'none',
						transition: 'all .2s ease-in-out',
						border: `2px solid #CD1AA7`,
						color: `#CD1AA7`
					}
				},
				{
					props: { variant: 'radiusOutlined', color: 'secondary' },
					style: {
						backgroundColor: 'transparent',
						borderRadius: 16,
						textTransform: 'none',
						transition: 'all .2s ease-in-out',
						border: `2px solid #AF7AC5`,
						color: `#AF7AC5`
					}
				},
				{
					props: { variant: 'contained' },
					style: {
						background: "-webkit-linear-gradient(45deg, #CD1AA7 20%, #ED7C11  90%)",
						transition: 'all .2s ease-in-out',
						color: `#ffffff`,
						textTransform: 'none'
					}
				},
				{
					props: { variant: 'contained', color: 'secondary' },
					style: {
						background: "-webkit-linear-gradient(45deg, #AF7AC5 20%, #C0392B  90%)",
						transition: 'all .2s ease-in-out',
						color: `#ffffff`,
						textTransform: 'none'
					}
				},
				{
					props: { variant: 'text', color: 'inherit' },
					style: {
						backgroundColor: 'transparent',
						transition: 'all .2s ease-in-out',
						color: `#ffffff`,
						textTransform: 'none'
					}
				},
				{
					props: { variant: 'text', color: 'primary' },
					style: {
						textTransform: 'none'
					}
				},
				{
					props: { variant: 'text', color: 'secondary' },
					style: {
						textTransform: 'none'
					}
				}
			]
		},
		MuiCssBaseline: {
			styleOverrides: `
			  @font-face {
				font-family: 'BebasNeue';
				font-style: normal;
				font-display: swap;
				src: local('BebasNeue'), local('BebasNeue'), url(${Bebas}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			  }
			`,
		}
	}
})

export default theme