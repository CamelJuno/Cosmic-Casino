import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import { useTheme } from '@mui/material/styles'
import getParticleParams from './getParticleParams'

const StyledParticles = styled(Particles)`
  & canvas {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 1.25rem;
  }
`;

export default function Stars() {
	const theme = useTheme()
	const params = getParticleParams(theme)

	return (
		<div>
			<StyledParticles params={params} />
		</div>
	)
}
