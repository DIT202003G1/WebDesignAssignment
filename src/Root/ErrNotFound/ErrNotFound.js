import React from 'react'
import {Helmet} from 'react-helmet';
import Box from '@material-ui/core/Box'

export default function ErrNotFound(props){
	return(
		<Box m={10}>
			<Helmet>
				<title>404 Not Found - Learn Now!</title>
			</Helmet>
			ERR404 - Not Found. If you came here by clicking on one of the "Notes" from demo resources, I will add the notes later on
		</Box>
	);
}