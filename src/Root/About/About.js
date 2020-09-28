import React from 'react'
import {Helmet} from "react-helmet";
import {makeStyles} from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Logo from "./LogoDesign.png"
import SeanH from "./SeanH.jpg"
import Cat from "./Cat.png"

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	header:{
		"color":"#005005",
		"font-size":"22px",
		"margin":"30px 0px"
	},
	description:{
		"color":"#005005",
		"font-size":"18px",
		"line-height":"28px",
		"display":"block",
	},
	logo:{
		"margin-left":"20px",
		"height":"50px"
	},
	flexBox:{
		display:"flex",
		'justify-content': "space-between",
	},
	"contactType":{
		"color":"#005005",
		"font-weight":"bold"
	},
	"contactContent":{
		"color":"#005005",
		"padding-left":"20px"
	}
});

const founderBoxStyles = makeStyles({
	flexBox:{
		display:"flex",
	},
	flexRightItem:{
		margin:"0px 0px 0px 24px"
	},
	content:{
		"color":"#005005",
		margin:"0px 0px 20px 0px",
		"font-size":"20px",
	},
	qoute:{
		"color":"#005005",
		"font-style":"italic",
		"font-family":"serif",
		margin:"0px 0px 20px 0px",
		"font-size":"20px",
	}
});

// name={props.name} description={props.description}
function FounderBox(props){
	const classes = founderBoxStyles()
	return(
		<Box my={3} className={classes.flexBox}>
			<span><img width={150} alt={props.name} src={props.image} /></span>
			<span className={classes.flexRightItem}>
				<Typography className={classes.qoute}>‘ {props.description} ’</Typography>
				<Typography className={classes.content}>-- 2020 {props.name}</Typography>
			</span>
		</Box>
	);
}

export default function About(props){
	const classes = styles()
	return(
		<Box>
			<Helmet>
				<title>About - Learn Now!</title>
			</Helmet>
			<Box mb={2} className={classes.flexBox}><Typography className={classes.title} variant="h4">About Learn Now</Typography><img src={Logo} alt="learn now logo" className={classes.logo}/></Box>
			<Typography className={classes.description} variant="body1">The Learn Now Online Platform by Learn Now Ltd is a website which provides you educational resources from language learning to high-school programs such as the IB Diploma Program, the SAT or the International GCSE program, or general knoladge of different fields. </Typography>
			<Typography className={classes.description} variant="body1">We have designed an easier way to understand each topic and has summerized notes/exersices for each chepter.</Typography>
			<Typography className={classes.header} variant="body1">The Founders</Typography>
			<FounderBox image={SeanH} name="Sean H., Founder of Learn Now" description="I always had a dream when I was younger, which everyone can learn anything they want."/>
			<FounderBox image={Cat} name="Crying Cat, Co-Founder of Learn Now" description="Meow Meow, Meow"/>
			<Typography className={classes.header} variant="body1">Contact us</Typography>
			<table>
				<tr>
					<td className={classes.contactType}>Tel/Fax</td>
					<td className={classes.contactContent}>+603 1234 3210</td>
				</tr>
				<tr>
					<td className={classes.contactType}>Address</td>
					<td className={classes.contactContent}>No 1, Jalan Learn Now 1/1, Kuala Lumpur, Malaysia</td>
				</tr>
				<tr>
					<td className={classes.contactType}>Email</td>
					<td className={classes.contactContent}>CustomerService@LearnNow.com</td>
				</tr>
			</table>
		</Box>
	);
}
