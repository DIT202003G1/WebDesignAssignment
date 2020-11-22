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
import FormControl from '@material-ui/core/FormControl'
import Alert from '@material-ui/lab/Alert'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
	},
	"formControl":{
		"display":"block",
		"margin-bottom":"16px",
	},
	"txtInput":{
		"width":"100%"
	},
	"button":{
		"margin-top":"10px"
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function validateUsername(name){
	// 0 for valid, 1 for empty, 2 for invalid email format
	var isEmail = false;
	if (name.trim() === "") return 1;
	if (new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$").test(name)) isEmail = true;
	if (!isEmail && new RegExp("@").test(name)) return 2;
}

function validatePassword(password){
	//0 for valid, 1 for empty, 2 for less then 8 char
	if (password === "") return 1;
	if (password.length < 8) return 2;
}

function validateReenteredPassword(password){
	//0 for valid, 1 for empty, 2 for not match
	const pw = document.getElementById("password").value;
	if (password === "") return 1;
	if (password !== pw) return 2;
}

function RegForm(props){
	const classes = styles();
	const [showPw, setShowPw] = useState(false);
	const [showRePw, setShowRePw] = useState(false);
	const [validation, setValidation] = useState([0,0,0]);

	const unErrorMsgs = ["","Required Field","Invalid Email or Username"];
	const pwErrorMsgs = ["","Required Field","Password needs atleast 8"];
	const repwErrorMsgs = ["","Required Field","Re-entered password does not match"];

	const isError = () => (!!validation[0]) || (!!validation[1]) || (!!validation[0]);

	function validateUn(e){
		const result = validateUsername(e.target.value);
		setValidation([
			result,
			validation[1],
			validation[2]
		]); 
	}

	function validatePw(e){
		const result = validatePassword(e.target.value);
		setValidation([
			validation[0],
			result,
			validation[2]
		]); 	
	}

	function validateRePw(e){
		const result = validateReenteredPassword(e.target.value);
		setValidation([
			validation[0],
			validation[1],
			result
		]);	
	}

	async function validateAll(){
		const un = document.getElementById("username").value;
		const pw = document.getElementById("password").value;
		const repw = document.getElementById("reenterPassword").value;
		setValidation([
			validateUsername(un),
			validatePassword(pw),
			validateReenteredPassword(repw)
		]
		)
	}

	async function submit(){
		await validateAll();
		if (!isError()){
			alert("Registration Done! Proceed to login!")
			window.location.href="/login"
		}
	}

	return (
		<Box>
			<Typography variant="body1" className={classes.header}>Signing up for: {props.text}</Typography>
			<Collapse in={isError()} className={classes.formControl}>
				<Alert severity="error">One or multiple fields are Invalid</Alert>
			</Collapse>
			<FormControl className={classes.formControl}>
				<InputLabel error={!!validation[0]} htmlFor="username">Username</InputLabel>
				<Input
					error={!!validation[0]}
					onChange={validateUn}
					className={classes.txtInput}
					id="username"
					type="text"
				/>
				<FormHelperText error id="username-error-text">{unErrorMsgs[validation[0]]}</FormHelperText>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel error={!!validation[1]} htmlFor="password">Password</InputLabel>
				<Input
					error={!!validation[1]}
					onChange={validatePw}
					id="password"
					type={showPw ? "text" : "password"}
					endAdornment={
						<InputAdornment position="end">
						<IconButton onClick={()=>{setShowPw(!showPw)}}>
						{showPw ? <Visibility/> : <VisibilityOff/>}
						</IconButton>
						</InputAdornment>
					}
				/>
				<FormHelperText error id="password-error-text">{pwErrorMsgs[validation[1]]}</FormHelperText>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel error={!!validation[2]} htmlFor="reenterPassword">Re-Enter Password</InputLabel>
				<Input
					error={!!validation[2]}
					onChange={validateRePw}
					id="reenterPassword"
					type={showRePw ? "text" : "password"}
					endAdornment={
						<InputAdornment position="end">
						<IconButton onClick={()=>{setShowRePw(!showRePw)}}>
						{showRePw ? <Visibility/> : <VisibilityOff/>}
						</IconButton>
						</InputAdornment>
					}
				/>
				<FormHelperText error id="reenterPassword-error-text">{repwErrorMsgs[validation[2]]}</FormHelperText>
			</FormControl>
			<div className={`g-recaptcha ${classes.formControl}`} data-sitekey="6Lc1AtEZAAAAAEBVa1wvNDBt7VJtBKsXhBEVGGQa"/>
			<Button onClick={submit} variant="contained" color="secondary">Login</Button>
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
				<span className={classes.regForm}><RegForm backButton={()=>{setShowform(false);setShowplans(true);}} text={selected}/></span>
			</Collapse>
		</div>
	);
}