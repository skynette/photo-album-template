import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#FFF",
		padding: '28px 20px 26px',
	},
	icon: {
		marginRight: '10px',
	},
	buttons: {
		marginTop: '40px'
	},
	cardGrid: {
		padding: '20px 0',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%',
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: '#FFF',
		padding: '50px 0'
	}
}))

export default useStyles