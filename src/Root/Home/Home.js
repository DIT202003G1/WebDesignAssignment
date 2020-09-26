import React from 'react';
import {makeStyles} from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import imgHello from "./hello.png"

const styles = makeStyles({
	flexBox:{
		display:"flex",
		'justify-content': "space-between",
	},
	topContainer:{
		background:"#005005",
		"color":"white",
		"border-radius":"0% 0% 50% 50%",
		padding:"100px 0px 150px 0px"
	},
	t1:{
		"font-size":"30px",
		"line-height":"32px"
	},
	t2:{
		"font-size":"34px",
		"line-height":"32px",
		"font-weight":"bold",
		"margin":"0px 0px 25px 0px"
	},
	t3:{
		"font-size":"18px",
		"width":"300px",
	},
	t41:{
		"font-size":"30px",
		"font-weight":"bold"
	},
	t42:{
		"padding":"0px 0px 0px 20px",
		"font-size":"20px"
	}
});

export default function Home(props){
	const classes = styles()
	return(
		<div className={classes.topContainer}>
			<Container>
				<div className={classes.flexBox}>
					<span>
						<Box mt={5} mb={1}>
							<Typography className={classes.t1}>Learn Anywhere! Learn Anytime!</Typography>
							<Typography className={classes.t2}>Learn Now!</Typography>
						</Box>
						<Box mb={1}>
							<Typography className={classes.t3}>Education is the kindling of a flame, not the filling of a vessel.</Typography>
						</Box>
						<Box mb={1}>
							<table>
								<tr>
									<td className={classes.t41}>13K+</td>
									<td className={classes.t42}>Students Enrolled</td>
								</tr>
								<tr>
									<td className={classes.t41}>500+</td>
									<td className={classes.t42}>Learning Resources</td>
								</tr>
								<tr>
									<td className={classes.t41}>10</td>
									<td className={classes.t42}>Years of Experience of Education</td>
								</tr>
							</table>
						</Box>
					</span>
					<span>
						<img src={imgHello} width={650} alt="image of hello in different languages"/>
					</span>
				</div>
			</Container>
		</div>
	);
}