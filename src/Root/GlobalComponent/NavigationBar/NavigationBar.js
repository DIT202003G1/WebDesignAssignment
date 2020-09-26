import React from 'react';
import {useLocation} from "react-router";
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

//Custom Imports
import Icon from "./Icon.png"
import IconLight from "./IconLight.png"

const styles = makeStyles({
	sNavBar:{
		background:"#E9E9E9",
		"box-shadow":"0px 0px 30px 15px rgba(0,0,0,0.2)"
	},
	sButton:{
		color:"#3b7d32",
		"text-decoration":'none'
	},
	button:{
		color:"white",
		"text-decoration":'none'
	},
	sTitle:{
		color:"#005005"
	},
	sOutlined:{
		color:"#3b7d32",
		"border":"solid #3b7d32 1px",
	},
	outlined:{
		"border":"solid #3b7d32 1px",
	},
	flexBox:{
		display:"flex",
		'justify-content': "space-between",
	},
	buttonIcon:{
		"margin-right":"5px",
	}
});

const NavigationBar = (props) => {
	const classes = styles();

	const location = useLocation();
	var navbClass = "";
	var titleClass = "";
	var buttonClass = classes.button;
	var outlinedClass = classes.outlined;
	var iconpng = Icon;
	if (location.pathname !== "/"){
		navbClass = classes.sNavBar;
		titleClass = classes.sTitle;
		buttonClass = classes.sButton;
		outlinedClass = classes.sOutlined;
		iconpng = IconLight;
	}
	
	var rightSide = [
		<Link className={buttonClass} to="Login">
			<Button className={buttonClass} color="inherit"><Typography variant="button">Login</Typography></Button>
		</Link>,
		<Box ml={2}>
			<Link className={buttonClass} to="Registration">
				<Button className={outlinedClass} color="inherit"><AddCircleOutlineIcon className={classes.buttonIcon}/><Typography variant="button">Subscribe</Typography></Button>
			</Link>
		</Box>
	]
	var leftSide = [
		<Box ml={2}>
			<Link className={buttonClass} to="Samples">
				<Button color="inherit" className={buttonClass}><Typography variant="button">Demo Resources</Typography></Button>
			</Link>
		</Box>
	]
	if (props.loggedin){
		rightSide = [
			<Typography>Placeholder</Typography>
		]
		leftSide = [
			<Box ml={2}><Typography>Placeholder</Typography></Box>
		]
	}

	return(
		<AppBar position="fixed" className={navbClass}>
			<Container>
				<span className={classes.flexBox}>
					<Toolbar>
						<Link to="/">
							<IconButton color="inherit">
								<img src={iconpng} width={35} alt="Learn Now Icon"/>
							</IconButton>
						</Link>
						<Typography variant="h6" className={titleClass}>Learn Now</Typography>
						<Box ml={2}>
							<Link className={buttonClass} to="/">
								<Button color="inherit" className={buttonClass}><Typography variant="button">Home</Typography></Button>
							</Link>
						</Box>
						{leftSide}
						<Box ml={2}>
							<Link className={buttonClass} to="About">
								<Button color="inherit" className={buttonClass}><Typography variant="button">About</Typography></Button>
							</Link>
						</Box>
					</Toolbar>
					<Toolbar>{rightSide}</Toolbar>
				</span>
			</Container>
		</AppBar>
	)
}

export default NavigationBar;