import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

const App = () => {
	return (
		<>
			<CssBaseline />
			<AppBar postion="relative">
				<Toolbar>
					<PhotoCamera />
					<Typography variant="h6">
						Photo Album
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default App