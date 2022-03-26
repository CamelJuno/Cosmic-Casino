import { makeStyles } from '@mui/styles'
import imagesList from '../assets'

const useStyles = makeStyles(() => ({
    parallax: {
        background: `url(${imagesList.Back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        zIndex: -2
    },
    parallax2: {
        background: '#000000',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: -3,
    }
}))

export default useStyles