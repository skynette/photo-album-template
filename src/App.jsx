import React, { useEffect } from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, CircularProgress } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from './galleryState'
import LoadingScreen from './LoadingScreen'

const App = () => {
	const dispatch = useDispatch()
	const photos = useSelector(store => store.gallery.photos)
	const isLoading = useSelector(store => store.gallery.isLoading)
	const classes = useStyles()

	useEffect(() => {
		dispatch(fetchPhotos())
	}, [dispatch])

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
							Preserve your memories with our beautifully crafted photo album
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
				{isLoading ? (
					<LoadingScreen />
				) : (
					<Container maxWidth="md" className={classes.cardGrid}>
						<Grid container spacing={4}>
							{photos.map((photo) => (
								<Grid item key={photo.id} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardMedia
											image={photo.download_url}
											title="Image Title"
											className={classes.cardMedia}
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5">
												{photo.author}
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
				)}
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
