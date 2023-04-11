import React, { Component } from 'react';
import Status from './status';
import "./statusbar.css";
class Statusbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='statusbar-container'>
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
              
            
            
            
            </div>
         );
    }
}
 
export default Statusbar;