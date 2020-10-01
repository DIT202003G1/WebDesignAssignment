import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';
import DownloadIcon from '@material-ui/icons/GetApp';
import BookmarkIcon from '@material-ui/icons/TurnedInNot';
import NoteIcon from '@material-ui/icons/Note';

const styles = makeStyles({
	title:{
		"color":"#005005",
	},
	content:{
		"color":"#005005",
	},
	flexBox:{
		display:"flex",
		'justify-content': "flex-end",
		// "align-items":"right",
	},
	docTitle:{
		"font-family":"Arial,Calibri,sans-serif",
		"margin-bottom":"18px",
		"font-size":"42px",
		"font-weight":"normal"
	},
	docContent:{
		"font-family":"Arial,Calibri,sans-serif",
		"text-indent":"30px",
		"font-size":"22px",
		"text-align":"justify"
	}
});

const urlTopics = {
	"HTML":"HTML Basics",
	"Esperanto":"Intro to Esperanto",
	"Chemistry":"Chemistry"
}

const urlDicts = {
	"HTML":{
		"GettingStarted":"Getting Started",
		"HTMLComponents":"Html Components",
		"IntroCssJs":"Introduction to CSS and JS",
		"Sum":"Summerized Notes"
	},
	"Esperanto":{
		"Letters":"Esperanto Letters",
		"Numbers":"Esperanto Numbers",
		"Basics":"Other Esperanto Basics",
		"Sum":"Summerized Notes",
	},
	"Chemistry":{
		"AtomicStructure":"Atomic Structure",
		"PeriodicTable":"Related to Periodic Table",
		"Sum":"Summerized Notes",
	},
}

export default function Docs(props){
	const classes = styles();
	const args = props.match.params;
	var sampleDocument = [
		<Box className={classes.flexBox} mt={4} px={10}>
			<span><Tooltip placement="top" title="Add Notes (Please Login)"><IconButton onClick={()=>{document.location = "/Login/"}}><NoteIcon/></IconButton></Tooltip></span>
			<span><Tooltip placement="top" title="Add to Bookmark (Please Login)"><IconButton onClick={()=>{document.location = "/Login/"}}><BookmarkIcon/></IconButton></Tooltip></span>
			<span><Tooltip placement="top" title="Download"><IconButton color="primary"><DownloadIcon onClick={()=>{alert("insert download link for this file here")}}/></IconButton></Tooltip></span>
		</Box>,
		<Box mt={1} mb={2} px={10}>
			<Paper square elevation={3}>
				<Box px={10} pt={10} pb="250px">
					<h1 className={classes.docTitle}>Test Document</h1>
					<p className={classes.docContent}>This is an test document, to show that this should be an either pdf file or markdown file. (A placeholder document)</p>
					<br/>
					<p className={classes.docContent}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar arcu sem, in eleifend erat semper sed. Aliquam euismod euismod lectus blandit suscipit. Phasellus sed faucibus massa. Integer pellentesque sed nibh ac vestibulum. Aenean sit amet lorem sed purus egestas pellentesque. Praesent eget nunc metus. Pellentesque elementum orci ipsum, quis egestas sapien vehicula at. Sed venenatis congue nulla, non congue diam imperdiet a.
					</p>
					<br/>
					<p className={classes.docContent}>
						Vestibulum rhoncus convallis velit in aliquam. Vivamus vel ligula vitae eros molestie tristique. Nulla sed tempus metus. Nam ultrices eu massa quis pulvinar. Sed ornare justo tincidunt, dictum lectus nec, rhoncus libero. Nullam molestie viverra vulputate. Quisque lobortis condimentum risus vel commodo. Vivamus euismod sapien sit amet faucibus tempor. Pellentesque placerat fringilla condimentum. Morbi porttitor sagittis purus a interdum.
					</p>
					<br/>
					<p className={classes.docContent}>
						Cras vitae erat eu arcu cursus tristique. Maecenas efficitur quis neque ut dignissim. Nullam eget lectus ac est luctus condimentum. Donec lobortis tincidunt sapien in tempus. Nam et convallis massa, et vulputate turpis. Fusce consequat lectus eu urna vehicula, ut pulvinar massa hendrerit. Quisque sit amet ullamcorper dui. Fusce facilisis nisl nibh, vitae interdum magna interdum at. Aliquam vehicula auctor neque, nec tincidunt mi suscipit non. Praesent nec sollicitudin nunc. Vivamus egestas convallis sapien non suscipit. Suspendisse potenti. In hac habitasse platea dictumst. Nullam et lorem vel felis tempus bibendum sed et justo.
					</p>
					<br/>
					<p className={classes.docContent}>
						Vestibulum accumsan turpis nec metus feugiat, nec lobortis nibh ornare. Integer ipsum quam, fringilla in consectetur et, euismod id libero. Nullam interdum, felis vitae tristique accumsan, lorem purus efficitur enim, vel scelerisque nisl leo quis quam. Duis laoreet consectetur risus id blandit. Vivamus eu congue mauris. Sed nec nunc consequat, tempor est fermentum, pharetra est. Ut aliquet purus condimentum, ultricies odio at, congue nibh.
					</p>
					<br/>
					<p className={classes.docContent}>
						Sed euismod posuere augue, id hendrerit ligula tincidunt id. Vestibulum aliquet, diam vel iaculis luctus, enim ligula egestas quam, vitae molestie sapien augue nec massa. Phasellus augue dui, fermentum nec tempor ac, fermentum nec nisl. Pellentesque diam metus, efficitur in vestibulum eleifend, elementum sit amet sem. Integer congue leo venenatis velit fringilla hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna felis, blandit et orci a, convallis accumsan eros. Pellentesque eleifend, lorem ut aliquam venenatis, lacus nunc sollicitudin nisl, sed ornare quam magna eget nibh. Donec eu ante ut turpis cursus aliquam eu eget quam. Aliquam quis sagittis elit. Nullam rutrum leo nec blandit dignissim.
					</p>
				</Box>
			</Paper>
		</Box>,
		<Box mt={2} mb={2} px={10}>
			<Paper square elevation={3}>
				<Box px={10} pt={10} pb="1250px">
					<h1 className={classes.docTitle}>Second Page</h1>
					<p className={classes.docContent}>Multiple Page Demo</p>
				</Box>
			</Paper>
		</Box>
	];
	var docIsValid = true
	if ((!("title" in args)) || (!(args.subject in urlDicts)) || (!(args.title in urlDicts[args.subject]))) docIsValid = false;
	var title = "";
	if (docIsValid) title = `${urlTopics[args.subject]} - ${urlDicts[args.subject][args.title]}`;
	else {
		title = `Document '${args.subject} - ${args.title}' is not found.`;
		sampleDocument = (
			<Box my={2}><Typography className={classes.content}>Please check your url, or press <Link className={classes.content} to="/Samples">here</Link>  to view a list of available documents.</Typography></Box>
		);
	}
	return(
		<Box>
			<Box mb={2}><Typography className={classes.title} variant="h4">{title}</Typography></Box>
			{sampleDocument}
		</Box>
	);	
}