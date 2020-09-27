import React from 'react';
import {Helmet} from 'react-helmet';
import {makeStyles} from '@material-ui/styles'
import {Formik, Form, Field} from 'formik' 
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'

import imgHello from "./hello.png"

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	"flexBox":{
		"display":"flex",
		"justify-content":"space-between"
	}
});

function LoginButton(props){
	return <Button {...props} color="secondary" />
}

function LoginInputs(props){
	return <TextField {...props} color="secondary" />
}

export default function Login(props){
	const classes = styles();
	return(
		<div>
			<Helmet>
				<title>Login - Learn Now!</title>
				<script src="https://www.google.com/recaptcha/api.js" async defer></script>
			</Helmet>
			<Box mb={2}><Typography className={classes.title} variant="h4">Login</Typography></Box>
			<Box className={classes.flexBox}>
				<span>
					<Box mt={3}>
						<Formik onSubmit={(values, {setSubmitting}) => {window.location="App"}} validate={(i)=>{return null}} initialValues={{username:"",password:""}}>
							{({submitForm, isSubmitting, touched, errors}) => {return([
								<Box mb={2}><Field component={LoginInputs} name="username" type="username" label="Username / E-Mail"/></Box>,
								<Box mb={2}><Field component={LoginInputs} name="password" type="password" label="Password"/></Box>,
								<Box mb={2}><div class="g-recaptcha" data-sitekey="6Lc1AtEZAAAAAEBVa1wvNDBt7VJtBKsXhBEVGGQa"/></Box>,
								<Box mb={2}><LoginButton variant="contained" onClick={submitForm}>Login</LoginButton></Box>,
							]);}}
						</Formik>
					</Box>
				</span>
				<span>
					<img src={imgHello} width={600} alt="Hello of different languages" />
				</span>
			</Box>
		</div>
	);
}