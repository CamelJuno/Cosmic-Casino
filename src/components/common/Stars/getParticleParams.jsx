const getParticleParams = (theme) => ({
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				area: 500
			}
		},
		color: {
			value: "#ffffff",
		},
		links: {
			enable: false,
			opacity: 0.15,
			color: theme.palette.secondary.main,
		},
		move: {
			direction: "down",
			speed: 0.2,
			enable: true
		},
		size: {
			value: 2
		},
		opacity: {
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.05
			}
		}
	},
	retina_detect: true
})

export default getParticleParams
