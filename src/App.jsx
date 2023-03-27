import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import useStyles from './styles'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
	const classes = useStyles()
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant="h6">
						Photo Album
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm" style={{ marginTop: '50px' }}>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Hello everyone this is a photo album and I am trying to make this long as posible to it can wrap around.
						</Typography>
						<div className={classes.buttons}>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth="md" className={classes.cardGrid}>
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										image="https://source.unsplash.com/random"
										title="Image Title"
										className={classes.cardMedia}
									/>
									<CardContent className={classes.cardContent}>
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
						))}
					</Grid>
				</Container>
				<Container>

				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align='center' color="textSecondary">
					Something to give this footer a purpose
				</Typography>
			</footer>
		</>
	)
}

export default App