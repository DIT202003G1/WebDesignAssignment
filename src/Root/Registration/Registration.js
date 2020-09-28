import React, { useState } from 'react'
import {Helmet} from 'react-helmet';
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Collapse from '@material-ui/core/Collapse'
import {Formik, Form, Field} from 'formik'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	flexBox:{
		"display":"flex",
		"justify-content": "center"
	},
	flexBox2:{
		"display":"flex",
	},
	regForm:{
		margin:"48px 48px 0px 0px"
	},
	header:{
		"color":"#005005",
		"font-size":"22px",
		"margin":"30px 0px"
	},
	subButton:{
		"margin-left":"16px"
	}
});

const planStyles = makeStyles({
	container:{
		"border":"#60ad5e solid 1px",
		"border-radius":"5px",
		"margin":"0px 20px 0px 0px",
		"width":"300px"
	},
	"title":{
		"background":"#60ad5e",
		"padding":"15px",
		"color":"white",
		"font-size":"18px"
	},
	"lists":{
		"color":"#005005",
		"line-heights":"20px",
		"margin":"0px 0px 0px 10px"
	},
	flexBox:{
		"display":"flex",
	}
})

function LoginButton(props){
	return <Button {...props} color="secondary" />
}

function LoginButtonSub(props){
	return <Button {...props} variant="text" color="secondary" />
}

function LoginInputs(props){
	return <TextField {...props} color="secondary" />
}

function Plans({name,listitems,price,link}){
	const classes = planStyles();
	return( 
		<span>
			<Box className={classes.container}>
				<div className={classes.title}>{name}</div>
				<Box m={1}>
					<Box mb={1}><Typography>For a {name} Account, You can:</Typography></Box>
					<Box mb={1}>
						{listitems.map((i)=>{return(
							<Typography className={classes.lists}>{i}</Typography>
						)})}
					</Box>
				</Box>
				<Box py={1} pl={1} className={classes.flexBox}>
					<Button color="primary" variant="outlined" onClick={link}>Select</Button>
					<Box mt={1} mx={1}><Typography>Price: {price}</Typography></Box>
				</Box>
			</Box>
		</span>
	);
}

function RegForm(props){
	const classes = styles()
	return (
		<Box>
			<Typography className={classes.header} variant="body1">Signing up for: {props.text}</Typography>
			<Formik onSubmit={(values, {setSubmitting}) => {window.location="App"}} validate={(i)=>{return null}} initialValues={{username:"",password:""}}>
				{({submitForm, isSubmitting, touched, errors}) => {return([
					<Box mb={2}><Field component={LoginInputs} name="username" type="username" label="Username / E-Mail"/></Box>,
					<Box mb={2}><Field component={LoginInputs} name="password" type="password" label="Password"/></Box>,
					<Box mb={2}><Field component={LoginInputs} name="reenter" type="password" label="Re-Enter"/></Box>,
					<Box mb={2}><div class="g-recaptcha" data-sitekey="6Lc1AtEZAAAAAEBVa1wvNDBt7VJtBKsXhBEVGGQa"/></Box>,
					<Box mb={2}><LoginButton variant="contained" onClick={submitForm}>Submit</LoginButton><LoginButtonSub className={classes.subButton} variant="contained" onClick={props.backButton}>Back</LoginButtonSub></Box>,
				]);}}
			</Formik>
		</Box>
	);
}

export default function Registration(porps){
	const classes = styles();
	const [showpalns,setShowplans] = useState(true)
	const [showform,setShowform] = useState(false)
	const [selected,setSelected] = useState("")
	return(
		<div>
			<Helmet>
				<title>Subscribe - Learn Now!</title>
			</Helmet>
			<Box mb={2}><Typography className={classes.title} variant="h4">Subscribe to Learn Now</Typography></Box>
			<Collapse in={showpalns}><Box className={classes.flexBox}>
				<Plans link={()=>{setShowform(true);setShowplans(false);setSelected("Free")}} name="Free" price="Free" listitems={["Select up to 3 Subjects","Use up to 3 hours per day"]}/>
				<Plans link={()=>{setShowform(true);setShowplans(false);setSelected("Standard")}} name="Standard" price="30 MYR/Month" listitems={["Select up to 10 Subjects","No time limitations","Ads free"]}/>
				<Plans link={()=>{setShowform(true);setShowplans(false);setSelected("Pro")}} name="Pro" price="80 MYR/Month" listitems={["View all available subjects","No time limitations","Ads free","Ask Questions to a Varified Lecturer"]}/>
			</Box></Collapse>
			<Collapse in={showform} className={classes.flexBox2}>
				<span className={classes.regForm}><RegForm backButton={()=>{setShowform(false);setShowplans(true);}} text={selected}/></span
>			</Collapse>
		</div>
	);
}