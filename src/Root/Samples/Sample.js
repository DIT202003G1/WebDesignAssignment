import React,{useState} from 'react';
// import {useState} from 'react';
import {Link} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import NoteIcon from '@material-ui/icons/Note';
import FolderIcon from '@material-ui/icons/Folder';

import {makeStyles} from '@material-ui/styles'

const styles = makeStyles({
	title:{
		"color":"#005005"
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
		"padding":"10px 10px",
		"color":"white"
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
	const [title, setTitle] = useState("Please select a topic.");
	const [contents, setContents] = useState([])
	const [classNames,setClassNames] = useState(["","",""])
	const switchContent = (index) => {
		switch (index){
			case 1:
				setClassNames([classes.listItemSelected,"",""])
				setTitle("Languages: Esparanto Basics")
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/Esparanto/Exercises"},
					{"icon":<NoteIcon/>,"title":"Esparanto Letters","subTitle":"Esparanto Letters and the Pronouncation","link":"/Samples/Esparanto/Doc_Letters"},
					{"icon":<NoteIcon/>,"title":"Esparanto Numbers","subTitle":"Counting in Esparanto","link":"/Samples/Esparanto/Doc_Numbers"},
					{"icon":<NoteIcon/>,"title":"Other Esparanto Basics","subTitle":"Basic Vocabs, Basic Grammars","link":"/Samples/Esparanto/Doc_Basics"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/Esparanto/Doc_Sum"}
				]);
				break;
			case 2:
				setClassNames(["",classes.listItemSelected,""])
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/HTML/Exercises"},
					{"icon":<NoteIcon/>,"title":"Getting Started","subTitle":"How to create your first Web Page","link":"/Samples/HTML/Doc_GettingStarted"},
					{"icon":<NoteIcon/>,"title":"Html Components","subTitle":"Common HTML Components","link":"/Samples/HTML/Doc_HTMLComponents"},
					{"icon":<NoteIcon/>,"title":"Introduction to CSS and JS","subTitle":"An brief introduction on styling and JS programming","link":"/Samples/HTML/Doc_IntroCssJs"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/HTML/Doc_Sum"}
				]);
				setTitle("IT: HTML Basics")
				break;
			case 3:
				setTitle("Chemistry: Atomic Structure")
				setClassNames(["","",classes.listItemSelected])
				setContents([
					{"icon":<FolderIcon/>,"title":"Exercises","subTitle":"Click to begin the exercises","link":"/Samples/Chemistry/Exercises"},
					{"icon":<NoteIcon/>,"title":"Atomic Struction","subTitle":"The Structure and Properties of an atom","link":"/Samples/Chemistry/Doc_GettingStarted"},
					{"icon":<NoteIcon/>,"title":"Related to Periodic Table","subTitle":"What does the periodic table tells you about an atom","link":"/Samples/Chemistry/Doc_HTMLComponents"},
					{"icon":<NoteIcon/>,"title":"Summerized Notes","subTitle":"Everything you need for revision","link":"/Samples/Chemistry/Doc_Sum"}
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
			<Typography className={classes.title} variant="h4">Demo Resource</Typography>
			<Box className={classes.flexBox} mt={5}>
				<span>
					<Box mr={2} className={classes.listBox} variant="outlined">
						<div className={classes.listTitle}>Demo Resources Index</div>
						<List>
							<ListItem onClick={(c) => {switchContent(1)}} className={classNames[0]} button><ListItemText primary="Languages: Esparanto Basics"/></ListItem>
							<ListItem onClick={(c) => {switchContent(2)}} className={classNames[1]} button><ListItemText primary="IT: HTML Basics"/></ListItem>
							<ListItem onClick={(c) => {switchContent(3)}} className={classNames[2]} button><ListItemText primary="Chemistry: Atomic structure"/></ListItem>
						</List>
					</Box>
				</span>
				<span>
					<Typography variant="h4" className={classes.title}>{title}</Typography>
					<Box mr={1}>
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