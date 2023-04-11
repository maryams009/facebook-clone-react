import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import "./leftSidePanel.css"
class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='imagelayout-main'>
               <div className='avatar-div'>
               <Avatar className='avatar-img' src={this.props.image} />
               </div>
             
               <div className='avatar-name'>
               {this.props.text}

               </div>

            </div>
         );
    }}

 
export default ImageLayout;