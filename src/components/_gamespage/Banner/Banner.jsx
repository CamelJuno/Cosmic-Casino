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
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6} lg={4} sm={12} xl={4}>
                        <HomeCard
                            active={true}
                            title='RAW'
                            subtitle='Guess the Burn'
                            image={imagesList.Dynamite}
                            alive='Live'
                            mes='Junø'
                            icon={imagesList.PuntoLive}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sm={12} xl={4}>
                        <HomeCard
                            active={false}
                            title='COSMIC'
                            subtitle='Coming soon'
                            image={imagesList.Saturn}
                            alive='Soon'
                            //mes='Junø'
                            icon={imagesList.PuntoSoon}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sm={12} xl={4}>
                        <HomeCard
                            active={false}
                            title='HUAHUA'
                            subtitle='Beach'
                            image={imagesList.Beach}
                            alive='Soon'
                            //mes='Junø'
                            icon={imagesList.PuntoSoon}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Banner