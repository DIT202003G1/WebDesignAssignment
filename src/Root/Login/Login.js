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
	return [(returnCode>0), returnCode];
}

function validatePassword(password){
	//0 for valid, 1 for empty
	var returnCode = 0;
	if (password === "") returnCode = 1;
	return [(returnCode>0),returnCode];
}

function LoginForm(props){
	const [unState, setUnState] = useState([false,""]);
	const [pwState, setPwState] = useState([false,""]);
	const [validState, setValidState] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const unErrorMessages = ["","Username cannot be empty","Invalid Email Address or Username containing '@'"];
	const pwErrorMessages = ["","Password cannot be empty"];
	const updateUnField = (eArgs) => {
		const result = validateUsername(eArgs.target.value)
		setUnState([result[0],unErrorMessages[result[1]]]);
		setValidState(!result[0]);
	}
	const updatePwField = (eArgs) => {
		const result = validatePassword(eArgs.target.value)
		setPwState([result[0],pwErrorMessages[result[1]]]);
		setValidState(!result[0]);
	}
	const updateShowPw = (eArgs) => {
		setShowPassword(!showPassword);
	}
	const onLoginClick = (eArgs) => {
		var message = validState ? "Successfully logged in" : "One or Multiple fields invalid!";
		alert(message);
	}
	const classes = styles();
	return ([
		<FormControl className={classes.formControl} >
			<InputLabel error={unState[0]} htmlFor="username">Username</InputLabel>
			<Input
				error={unState[0]}
				id="username"
				type="text"
				className={classes.txtInput}
				onChange={updateUnField}
			/>
			<FormHelperText error={unState[0]} id="username-error-text">{unState[1]}</FormHelperText>
		</FormControl>,
		<FormControl className={classes.formControl}>
			<InputLabel error={pwState[0]} htmlFor="password">Password</InputLabel>
			<Input
				id="password"
				error={pwState[0]}
				className={classes.txtInput}
				type={showPassword ? 'text' : 'password'}
				onChange={updatePwField}
				endAdornment={
					<InputAdornment position="end">
					<IconButton aria-label="toggle password visibility" onClick={updateShowPw}>
					{showPassword ? <Visibility /> : <VisibilityOff />}
					</IconButton>
					</InputAdornment>
				}
			/>
			<FormHelperText error={pwState[0]} id="password-error-text">{pwState[1]}</FormHelperText>
		</FormControl>,
		<div className={classes.formControl} class="g-recaptcha" data-sitekey="6Lc1AtEZAAAAAEBVa1wvNDBt7VJtBKsXhBEVGGQa"/>,
		<Button className={classes.button} variant="contained" color="secondary" onClick={onLoginClick}>Login</Button>
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