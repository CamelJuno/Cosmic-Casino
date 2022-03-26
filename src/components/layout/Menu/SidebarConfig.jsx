import InfoIcon from '@mui/icons-material/Info'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MapIcon from '@mui/icons-material/Map'
import onScroll from '../../../helpers/onScroll'

const sidebarConfig = [
	{
		title: 'Inicio',
		icon: <DashboardIcon />,
		click: () => onScroll('#vision')
	},
	{
		title: 'Link 1',
		icon: <InfoIcon />,
		click: () => onScroll('#mision')
	},
	{
		title: 'Link 2',
		icon: <MapIcon />,
		click: () => onScroll('#roadmap')
	},
	{
		title: 'Link 3',
		icon: <MapIcon />,
		click: () => onScroll('#roadmap')
	}
]

export default sidebarConfig