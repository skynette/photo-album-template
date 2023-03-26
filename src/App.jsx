import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#FFF",
	}
}))

const App = () => {
	const classes = useStyles()
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera />
					<Typography variant="h6" sx={{ ml: 1 }}>
						Photo Album
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div style={{ padding: '28px 20px 26px' }} className={classes.container}>
					<Container maxWidth="sm" style={{ marginTop: '50px' }}>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Hello everyone this is a photo album and I am trying to make this long as posible to it can wrap around.....
						</Typography>
						<div>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Button variant="contained" color="primary" sx={{ marginTop: '40px' }}>
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary" sx={{ marginTop: '40px' }}>
										Secondary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth="md">
					<Grid container spacing={4}>
						<Grid item sx={{ padding: '20px 0' }}>
							<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
								<CardMedia
									image="https://source.unsplash.com/random"
									title="Image Title"
									sx={{
										paddingTop:
											'56.25%'
									}}
								/>
								<CardContent
									sx={{ flexGrow: 1 }}
								>
									<Typography gutterBottom variant="h5">
										Heading
									</Typography>
									<Typography>
										This is a media card, use this for content description
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">View</Button>
									<Button size="small" color="primary">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>
		</>
	)
}

export default App