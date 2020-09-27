import React,{useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoteIcon from '@material-ui/icons/Note';
import FolderIcon from '@material-ui/icons/Folder';

import {makeStyles} from '@material-ui/styles';

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	description:{
		"color":"#005005",
		"line-height":"28px",
		"font-size":"22px",
		"display":"block",
	},
	instruction:{
		"color":"#005005",
		"line-height":"28px",
		"display":"block",
		"font-size":"22px",
		"margin":"20px 0px"
	},
	header:{
		"color":"#005005",
		"font-size":"28px"
	},
	flexBox:{
		display:"flex"
	},
	listBox:{
		"background":"#f4f9f1",
		"border":"#60ad5e solid 1px",
		"border-radius":"5px"
	},
	listTitle:{
		"background":"#60ad5e",
		"padding":"15px",
		"color":"white",
		"font-size":"18px"
	},
	listItemSelected:{
		"background":"#dcedca",
		"color":"#005005"
	},
	contentIcon:{
		"background":"#005005"
	},
	contentText:{
		"color":"black",
		"text-decoration":"none"
	}
});

export default function Samples(props){
	const classes = styles()
	const [title, setTitle] = useState("");
	const [contents, setContents] = useState([])
	const [classNames,setClassNames] = useState(["","",""])
	const switchContent = (index) => {
		switch (index){
			case 1:
				setClassNames([classes.listItemSelected,"",""])
				setTitle("Languages: Intro to Esperanto")
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/Esperanto/Exercises"},
					{"icon":<NoteIcon/>,"title":"Esperanto Letters","subTitle":"Esperanto Letters and the Pronouncation","link":"/Samples/Esperanto/Docs/Letters"},
					{"icon":<NoteIcon/>,"title":"Esperanto Numbers","subTitle":"Counting in Esperanto","link":"/Samples/Esperanto/Docs/Numbers"},
					{"icon":<NoteIcon/>,"title":"Other Esperanto Basics","subTitle":"Basic Vocabs, Basic Grammars","link":"/Samples/Esperanto/Docs/Basics"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/Esperanto/Docs/Sum"}
				]);
			break;
			case 2:
				setClassNames(["",classes.listItemSelected,""])
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/HTML/Exercises"},
					{"icon":<NoteIcon/>,"title":"Getting Started","subTitle":"How to create your first Web Page","link":"/Samples/HTML/Docs/GettingStarted"},
					{"icon":<NoteIcon/>,"title":"Html Components","subTitle":"Common HTML Components","link":"/Samples/HTML/Docs/HTMLComponents"},
					{"icon":<NoteIcon/>,"title":"Introduction to CSS and JS","subTitle":"An brief introduction on styling and JS programming","link":"/Samples/HTML/Docs/IntroCssJs"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/HTML/Docs/Sum"}
				]);
				setTitle("IT Front End: HTML Basics")
			break;
			case 3:
				setTitle("Chemistry: Atomic Structure")
				setClassNames(["","",classes.listItemSelected])
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/Chemistry/Exercises"},
					{"icon":<NoteIcon/>,"title":"Atomic Struction","subTitle":"The Structure and Properties of an atom","link":"/Samples/Chemistry/Docs/GettingStarted"},
					{"icon":<NoteIcon/>,"title":"Related to Periodic Table","subTitle":"What does the periodic table tells you about an atom","link":"/Samples/Chemistry/Docs/HTMLComponents"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/Chemistry/Docs/Sum"}
				]);
			break;
			default:
				setTitle("Please select a topic.")
				setClassNames(["","",""])
			break;
		}
	}
	return(
		<Box>
			<Helmet>
				<title>Demo Resources - Learn Now!</title>
			</Helmet>
			<Box mb={2}><Typography className={classes.title} variant="h4">Demo Resource</Typography></Box>
			<Typography className={classes.description} variant="Body">This is the Demo Resources of the system, you will be able to view some sample notes. </Typography>
			<Typography className={classes.description} variant="Body">Subscribe to gain access to our 5000+ resources for 30+ subjects.</Typography>
			<Typography className={classes.instruction} variant="Body">Get started by selecting a topic from the index below.</Typography>
			<Box className={classes.flexBox}>
				<span>
					<Box mr={6} className={classes.listBox} variant="outlined">
						<div className={classes.listTitle}>Demo Resources Index</div>
						<List>
							<ListItem onClick={(c) => {switchContent(1)}} className={classNames[0]} button><ListItemText primary="Languages: Intro to Esperanto"/></ListItem>
							<ListItem onClick={(c) => {switchContent(2)}} className={classNames[1]} button><ListItemText primary="IT Front End: HTML Basics"/></ListItem>
							<ListItem onClick={(c) => {switchContent(3)}} className={classNames[2]} button><ListItemText primary="Chemistry: Atomic structure"/></ListItem>
						</List>
					</Box>
				</span>
				<span>
					<Typography variant="h4" className={classes.header}>{title}</Typography>
					<Box>
						<List >
							{contents.map((i)=>
								<Link to={i.link} className={classes.contentText}>
									<ListItem button>
										<ListItemAvatar>
											<Avatar className={classes.contentIcon}>{i.icon}</Avatar>
										</ListItemAvatar>
										<ListItemText primary={i.title} secondary={i.subTitle}/>
									</ListItem>
								</Link>
							)}
						</List>
					</Box>
				</span>
			</Box>
		</Box>
	);
}