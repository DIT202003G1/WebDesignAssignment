import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'

const styles = makeStyles({
	flexBox:{
		display:"flex",
		'justify-content': "space-between",
	},
	light:{
		color:"gray"
	}
});

export default function Footer(props){
	const classes = styles()
	return(
		<Box my={3}>
			<Container>
				<Divider/>
				<Box mt={1} className={classes.flexBox}>
					<span className={classes.light}><Typography>&copy; 2020 Xuanao Zhao, Ryan Cheah, Yong Liang Poo, Tiew Shou Cheng. &nbsp;&nbsp;&nbsp;MIT Licence applied.</Typography></span>
				</Box>
			</Container>
		</Box>
	);
}