import React from 'react'
import {Helmet} from "react-helmet";
import {makeStyles} from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const styles = makeStyles({
	title:{
		"color":"#005005"
	}
});

export default function Exercises(props){
	const classes = styles();
	var Component = (<Box mb={2}><Typography className={classes.title} variant="h4">Exercises for: </Typography></Box>);
	return(
		<Box>
			<Helmet>
				<title>About - Learn Now!</title>
			</Helmet>
			{Component}
		</Box>
	);
}