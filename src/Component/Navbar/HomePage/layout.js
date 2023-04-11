import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import "./layout.css"
import "../navbar.css";
import LeftSidePanel from './LeftSidePanel/leftSidePanel';

import Statusbar from './Statusbar/statusbar';
import Uploadsection from './Uploadsection/uploadsection';
import Postcontainer from './Postcontainer/postcontainer';
import Rightsidepanel from './Rightsidepanel/rightsidepanel';
class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return(
<div className='homepage-container'>
    <Grid container>
        <Grid item xs={3}><LeftSidePanel /></Grid>
        <Grid item xs={6} className='middle-container'>
            <Statusbar />
            <Uploadsection />
            <Postcontainer />
            
            </Grid>
        <Grid item xs={3}>
            <Rightsidepanel />
        
        </Grid>
        
    </Grid>
</div>

        );
    }
}
 
export default Layout ;