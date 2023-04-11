import React, { Component } from 'react';
import { linkClasses, Paper } from '@mui/material';
import { Avatar } from '@mui/material';
import "./postcontainer.css";
import post from "../../../../images/post.jpeg";
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import share from "../../../../images/share.png";
import comment from "../../../../images/comment.png";
class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    Isimageavailable=(data)=>{
        return data==""?false:true;
    }
    render() { 
        return ( 
            <div>
             <Paper className='post-container'>
                {/*header*/}
                <div className='post-header'>
                    <div className='postheader-img'>
                        <Avatar  className='post-avatar' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64'  />

                    </div>
                    <div className='postheader-text'>
                        {this.props.object.user_name}

                    </div>

                </div>
                  {/*description*/}
                <div className='post-description'>
                    {this.props.object.description}

                </div>
                  {/*image*/}
                <div className='post-image'>
                    {
                        this.Isimageavailable(this.props.object.post_img) ?  <img src={this.props.object.post_img} width="600px"/>:<span></span>
                    }
                   

                </div>
                  {/*like count*/}
                <div className='post-likecountcontainer'>
                  <div className='post-like'>
                     <img className='post-img' src={like} />
                   </div>
                   <div className='post-likecount'>
                    {this.props.object.like}
                   </div>

                </div>
                  {/*like share box*/}
                <div className='post-likeshare'>
                    <div className='post-tab'>
                        <div className='first-tab'>
                            <img className='tab-img'  src={likebutton}/>

                        </div>
                        <div className='post-textlikeshare'>
                            Like
                        </div>
                    </div>


                    <div className='post-tab'>
                        <div className='first-tab'>
                            <img className='tab-img'  src={comment}/>

                        </div>
                        <div className='post-textlikeshare'>
                            Comment
                        </div>
                    </div>


                    <div className='post-tab'>
                        <div className='first-tab'>
                            <img className='tab-img'  src={share}/>

                        </div>
                        <div className='post-textlikeshare'>
                            Share
                        </div>
                    </div>

                </div>
                  {/*comment box*/}
                <div className='post-comment'>
                <div className='upload-top'>
                        <div>
                            <Avatar src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64'  className='upload-img' />
                        </div>
                        <div>
                            <input type="text" className='upload-inputbox'placeholder='What is on your mind?'/>
                        </div>
                    </div>

                </div>




             </Paper>

            </div>
         );
    }
}
 
export default Post;