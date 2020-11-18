import React,{useState} from 'react';
import {Helmet} from 'react-helmet';
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert'

import imgHello from "./hello.png"

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	"flexBox":{
		"display":"flex",
		"justify-content":"space-between"
	},
	"formControl":{
		"display":"block",
		"margin-bottom":"8px",
	},
	"txtInput":{
		"width":"100%"
	},
	"button":{
		"margin-top":"10px"
	}
});

function validateUsername(name){
	// 0 for valid, 1 for empty, 2 for invalid email format
	var isEmail = false;
	var returnCode = 0;
	if (name.trim() === "") returnCode = 1;
	if (new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$").test(name)) isEmail = true;
	if (!isEmail && new RegExp("@").test(name)) returnCode = 2;
	return returnCode; //[isInvalid]
}

function validatePassword(password){
	//0 for valid, 1 for empty
	var returnCode = 0;
	if (password === "") returnCode = 1;
	return returnCode;
}

function LoginForm(props){
	const classes = styles();
	const [showPw,setShowPw] = useState(true);
	const [validation, setValidation] = useState([0,0]);

	const unErrorMsgs = ["","Required Field","Invalid Email or Username Format"];
	const pwErrorMsgs = ["","Required Field"];

	function validateUn(){
		const un = document.getElementById("username").value;
		setValidation([validateUsername(un),validation[1]]);
	}

	function validatePw(){
		const pw = document.getElementById("password").value;
		setValidation([validation[0], validatePassword(pw)]);
	}

	function validateAll(){
		const un = document.getElementById("username").value;
		const pw = document.getElementById("password").value;
	}

	function submit(){
		validateAll();
		console.table(validation);
		if( validation[0] === 0 && validation[1] === 0) {
			alert("yay")
		}
	}

	return ([
		<Collapse in={(!!validation[0]) || (!!validation[1])}>
			<Alert severity="error">One or multiple fields are Invalid</Alert>
		</Collapse>,
		<FormControl className={classes.formControl} >
			<InputLabel error={!!validation[0]} htmlFor="username">Username</InputLabel>
			<Input
				error={!!validation[0]}
				onChange={validateUn}
				id="username"
				type="text"
				className={classes.txtInput}
			/>
			<FormHelperText error id="username-error-text">{unErrorMsgs[validation[0]]}</FormHelperText>
		</FormControl>,
		<FormControl className={classes.formControl}>
			<InputLabel error={!!validation[1]} htmlFor="password">Password</InputLabel>
			<Input
				id="password"
				error={!!validation[1]}
				onChange={validatePw}
				className={classes.txtInput}
				type={showPw ? "password" : "text"}
				endAdornment={
					<InputAdornment position="end">
					<IconButton onClick={()=>{setShowPw(!showPw)}}>
					{showPw ? <Visibility/> : <VisibilityOff/>}
					</IconButton>
					</InputAdornment>
				}
			/>
			<FormHelperText error id="password-error-text">{pwErrorMsgs[validation[1]]}</FormHelperText>
		</FormControl>,
		<div className={classes.formControl} class="g-recaptcha" data-sitekey="6Lc1AtEZAAAAAEBVa1wvNDBt7VJtBKsXhBEVGGQa"/>,
		<Button className={classes.button} onClick={submit} variant="contained" color="secondary">Login</Button>
	])
}

export default function Login(props){
	const classes = styles();
	return(
		<div>
			<Helmet>
				<title>Login - Learn Now!</title>
			</Helmet>
			<Box mb={2}><Typography className={classes.title} variant="h4">Login</Typography></Box>
			<Box className={classes.flexBox}>
				<span>
					<Box mt={3}>
					<LoginForm/>
					</Box>
				</span>
				<span>
					<img src={imgHello} width={600} alt="Hello of different languages" />
				</span>
			</Box>
		</div>
	);
}