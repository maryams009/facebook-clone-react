import React, { Component } from 'react';
import "./navbar.css";
import fblogo from "../../images/logo.png"
import home from "../../images/home.svg"
import page from "../../images/pages.svg"
import watch from "../../images/watch.svg"
import market from "../../images/market.svg"
import group from "../../images/groups.svg"

import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render(){
        return ( 
            <div>
                <Grid container className='navbar-main'>
                    <Grid item xs={3}><div className='navbar-left'>
                        <img src={fblogo}  width ="40spx" className='nav-fblogo' />
                        <input className='navbar-search' type="text" placeholder='Search Facebook'/>
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='navbar-middle'>
                        <div className='navbar-tabs active'>
                            <img src={home} height="35px" width="35px" />
                        </div>

                        <div className='navbar-tabs'>
                            <img src={page} height="35px" width="35px" />
                        </div>

                        <div className='navbar-tabs'>
                            <img src={watch} height="35px" width="35px" />
                        </div>

                        <div className='navbar-tabs'>
                            <img src={market} height="35px" width="35px" />
                        </div>

                        <div className='navbar-tabs'>
                            <img src={group} height="35px" width="35px" />
                        </div>

                       
                        </div>
                    
                    </Grid>
                    <Grid item xs={3}>
                        <div className='navbar-right'>
                            <div className='right-tab'>
                            <Avatar className='navbar-rightimg' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' />
                              <div className='navbar-profileName'>Maryam</div>
                              </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
         );
    }}

 
export default Navbar;