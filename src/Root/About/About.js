import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import {makeStyles} from '@material-ui/styles'

const styles = makeStyles({
	title:{
		"color":"#005005"
	}
});

export default function About(props){
	const classes = styles()
	return(
		<Box>
			<Typography className={classes.title} variant="h4">About Learn Now</Typography>
		</Box>
	);
}