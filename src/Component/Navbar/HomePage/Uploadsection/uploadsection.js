import { Avatar } from '@mui/material';
import { Paper } from '@mui/material';
import React, { Component } from 'react';
import live from "../../../../images/video.png";
import feelings from "../../../../images/feelings.png";
import image from "../../../../images/image.png";
import "./uploadsection.css";
class Uploadsection  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Paper className='uploadpaper'>
                    <div className='upload-top'>
                        <div>
                            <Avatar src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64'  className='upload-img' />
                        </div>
                        <div>
                            <input type="text" className='upload-inputbox'placeholder='What is on your mind?'/>
                        </div>
                    </div>
                    <div className='upload-bottom'>
                        <div className='upload-tabs'>
                            <img src={live} width="35px" />
                            <div className='upload-text'>Live Video </div>
                        </div>

                        <div className='upload-tabs'>
                           <img src={feelings} width="35px" />
                           <div className='upload-text'>Feeling/Activity</div>
                     </div>

                        <div className='upload-tabs'>
                           <img src={image} width="35px" />
                           <div className='upload-text'>Photo/Video</div>
                         </div>

                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default Uploadsection ;