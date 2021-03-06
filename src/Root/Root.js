import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

//global components
import NavigationBar from "./GlobalComponent/NavigationBar";
import Footer from "./GlobalComponent/Footer";

//pages
import License from './License';
import ErrNotFound from './ErrNotFound';
import Home from "./Home";
import Samples from "./Samples";
import SampleDocs from "./Samples/DynamicNotePages/Docs";
import About from "./About";
import Login from './Login';
import Registration from './Registration';

//create a material theme using createMuiTheme
const theme = createMuiTheme({
	"typography":{
		"fontFamily": "Ubuntu,Roboto,sans-serif"
	},
	"palette":{
		"primary":{
			"main":"#005005",
			"light":"#3b7d32",
			"dark":"#002700",
			"contrastText":"#FFFFFF"
		},
		"secondary":{
			"main":"#4b830d",
			"light":"#aee571",
			"dark":"#4b830d",
			"contrastText":"#FFFFFF"
		}
	}
})

export default function Root(props){
	return(
		<Router>
			<ThemeProvider theme={theme}>
			<NavigationBar/>
			<Box mt={6}>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Box mt={12}>
						<Container>
							<Switch>
								<Route exact path="/License" component={License}/>
								<Route exact path="/Samples" component={Samples}/>
								<Route exact path="/Samples/Docs/:subject/:title" component={SampleDocs}/>
								<Route exact path="/Samples/Docs/:subject" component={SampleDocs}/>
								<Route exact path="/About" component={About}/>
								<Route exact path="/Login" component={Login}/>
								<Route exact path="/Registration" component={Registration}/>
								<Route path="/" component={ErrNotFound}/>
							</Switch>
						</Container>
					</Box>
				</Switch>
			</Box>
			<Footer/>
			</ThemeProvider>
		</Router>
	);
}