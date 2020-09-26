import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

//global components
import NavigationBar from "./GlobalComponent/NavigationBar";

//pages
import Home from "./Home";
import Samples from "./Samples";
import About from "./About";
import Login from './Login';
import Registration from './Registration';

//create a material theme using createMuiTheme
const theme = createMuiTheme({
	typography:{
		fontFamily: [
			'Ubuntu',
			'Roboto',
			'sans-serif',
		].join(','),
	},
	palette:{
		primary:{
			main:"#005005",
			light:"#3b7d32",
			dark:"#002700",
			contrastText:"#FFFFFF"
		},
		secondary:{
			main:"#FAFAFA",
			light:"#FFFFFF",
			dark:"#F0F0F0",
			contrastText:"#000000"
		}
	}
})

export default function Root(props){
	return(
		<Router>
			<ThemeProvider theme={theme}>
			<NavigationBar/>
			<Box mt={6}><Switch>
					<Route exact path="/" component={Home}/>
					<Box mt={10}><Container>
						<Route exact path="/Samples" component={Samples}/>
						<Route exact path="/About" component={About}/>
						<Route exact path="/Login" component={Login}/>
						<Route exact path="/Registration" component={Registration}/>
					</Container></Box>
					{/*Add 404 page here*/}
			</Switch></Box>
			</ThemeProvider>
		</Router>
	);
}