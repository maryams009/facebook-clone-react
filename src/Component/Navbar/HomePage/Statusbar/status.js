import { Paper } from '@mui/material';
import React, { Component } from 'react';
import "./statusbar.css";
class Status extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
         <Paper className='paper' />
            </div>
        );
    }
}
 
export default Status;