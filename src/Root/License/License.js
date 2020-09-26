import React from 'react'
import {Helmet} from 'react-helmet';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import {makeStyles} from '@material-ui/styles'

const styles = makeStyles({
	title:{
		"color":"#005005"
	},
	info:{
		"background":"#60ad5e",
		"color":"white",
		"padding":"10px 20px",
		"text-decoration":"none"
	},
	infoLink:{
		"color":"white",
	},
	content:{
		"margin":"0px 0px 18px 0px",
		"font-family":"monospace",
		"text-align":"justify",
		"font-size":"18px"
	}
});

export default function License(props){
	const classes = styles()
	return(
		<div>
			<Helmet>
				<title>License - Learn Now!</title>
			</Helmet>
			<Box mb={5}><Typography className={classes.title} variant="h4">License</Typography></Box>
			<Box mb={5}><Typography className={classes.info}>This website is Open-Sourced with MIT License. The github repo of this website can be found <a className={classes.infoLink} target="_blank" href="https://www.github.com/DIT202003G1/WebDesignAssignment">here</a>.</Typography></Box>
			<Typography className={classes.content}>
				MIT License
			</Typography>
			<Typography className={classes.content}>
				Copyright (c) 2020 Xuanao Zhao, Ryan Cheah, Yong Liang Poo, Tiew Shou Cheng
			</Typography>
			<Typography className={classes.content}>
				Permission is hereby granted, free of charge, to any person obtaining a copy
				of this software and associated documentation files (the "Software"), to deal
				in the Software without restriction, including without limitation the rights
				to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
				copies of the Software, and to permit persons to whom the Software is
				furnished to do so, subject to the following conditions:
			</Typography>
			<Typography className={classes.content}>
				The above copyright notice and this permission notice shall be included in all
				copies or substantial portions of the Software.
			</Typography>
			<Typography className={classes.content}>
				THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
				IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
				FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
				AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
				LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
				OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
				SOFTWARE.
			</Typography>
		</div>
	);
}