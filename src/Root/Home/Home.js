import React from 'react';
import {makeStyles} from '@material-ui/styles'
import {Helmet} from "react-helmet";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import imgHello from "./hello.png"
import imgStores from "./Stores.png"
import imgPhoneUI from "./PhoneUI.png"

const styles = makeStyles({
	flexBox:{
		display:"flex",
		'justify-content': "space-between",
	},
	flexBox2:{
		display:"flex"
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
	},
	b1:{
		"font-size":"40px",
		"color":"#3b7d32",
		"line-height":"52px"
		// "font-weight":"bold"
	},
	b2:{
		"font-size":"52px",
		"color":"#005005",
		"line-height":"52px",
		"font-weight":"bold"
	},
	b3:{
		"font-size":"22px",
		"color":"#005005",
		"line-height":"22px",
		"margin":"20px 50px 0px 0px",
		"width":"300px",
	}
});

export default function Home(props){
	const classes = styles()
	return(
		<div>
			<div className={classes.topContainer}>
				<Helmet>
					<title>Learn Now!</title>
				</Helmet>
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
										<td className={classes.t42}>Users Subscribed</td>
									</tr>
									<tr>
										<td className={classes.t41}>5000+</td>
										<td className={classes.t42}>Learning Resources</td>
									</tr>
									<tr>
										<td className={classes.t41}>10</td>
										<td className={classes.t42}>Years of Experience of Education</td>
									</tr>
								</table>
							</Box>
						</span>
						<span><img src={imgHello} width={650} alt="image of hello in different languages"/></span>
					</div>
				</Container>
			</div>
			<Container>
				<Box mt={10}>
					<div className={classes.flexBox2}>
						<span>
							<Box m={3} mt={10} mr={12}>
								<Typography className={classes.b1}>Learn Anywhere!</Typography>
								<Typography className={classes.b2}>Learn Now Portable!</Typography>
								<Box mt={5}>
									<div className={classes.flexBox2}>
										<span>
											<Typography className={classes.b3}>A much more efficient way​ to study.</Typography>
											<Typography className={classes.b3}>The ultimate user-friendly mobile app that we all known and love.</Typography>
										</span>
										<span onClick={(i)=>{alert("Insert Link to App Store and Google Play here")}}>
											<img src={imgStores} alt={"Download button for Stores"} width="250px"/>
										</span>
									</div>
								</Box>
							</Box>
						</span>
						<span>
							<img src={imgPhoneUI} width="360" alt="placeholder" />
						</span>
					</div>
				</Box>
			</Container>
		</div>
	);
}