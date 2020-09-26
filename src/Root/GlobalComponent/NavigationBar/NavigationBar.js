import React from 'react';
import {useLocation} from "react-router";
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

const styles = makeStyles({
	sNavBar:{
		background:"#F0F0F0",
	},
	navBar:{
		"box-shadow":"none"
	},
	sButton:{
		color:"#3b7d32"
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
	var buttonClass = "";
	var outlinedClass = classes.outlined;
	if (location.pathname !== "/"){
		navbClass = classes.sNavBar;
		titleClass = classes.sTitle;
		buttonClass = classes.sButton;
		outlinedClass = classes.sOutlined;
	}
	return(
		<AppBar position="fixed" className={navbClass}>
			<Container>
				<span className={classes.flexBox}>
					<Toolbar>
						<IconButton color="inherit">
							<img src={Icon} width={35} alt="Learn Now Icon"/>
						</IconButton>
						<Typography variant="h6" className={titleClass}>Learn Now</Typography>
						<Box ml={2}>
							<Button color="inherit" className={buttonClass}><Typography variant="button">Home</Typography></Button>
						</Box>
						<Box ml={2}>
							<Button color="inherit" className={buttonClass}><Typography variant="button">Demo Resources</Typography></Button>
						</Box>
						<Box ml={2}>
							<Button color="inherit" className={buttonClass}><Typography variant="button">About</Typography></Button>
						</Box>
					</Toolbar>
					<Toolbar>
						<Button className={outlinedClass} color="inherit"><AddCircleOutlineIcon className={classes.buttonIcon}/><Typography variant="button">Subscribe</Typography></Button>
					</Toolbar>
				</span>
			</Container>
		</AppBar>
	)
}

export default NavigationBar;