import React, { Component } from 'react';
import ImageLayout from '../LeftSidePanel/imagelayout';
import "./rightsidepanel.css";

 
class Rightsidepanel extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[]
     }
     getData=()=>{
        let jsondata=[
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Maryam Saddiqa"
            },
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Bareen Bilal"
            },
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Sadia Bilal"
            },
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Haseeb Ahmed"
            },
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Rabbiya haseeb"
            },
            {
                "image":'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/282291725_5415726655133806_7176867412849301054_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyyWhc1LvlkAX9UAwsi&_nc_ht=scontent-cph2-1.xx&oh=00_AfBxcBpGEw-g9KnYYUCrqLUUNCCHuK2rLrtUN6c12bInJw&oe=63F7DE64' ,
                "text":"Zahida Jabeen"
            }
        ];
        this.setState({data:jsondata});
     }
      componentDidMount(){
        this.getData();
      }
    render() { 
        return ( 
            <div className='rightpanel-container'>
                <div className='rightpanel-header'>Contacts</div>
                <div className='rightpanel-content'>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>

                    ))
                }


                </div>
            </div>
         );
    }
}
 
export default Rightsidepanel;