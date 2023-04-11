import React, { Component } from 'react';
import ImageLayout from './imagelayout';
import "./leftSidePanel.css"
import covid from "../../../../images/covid.png"
import memories from "../../../../images/memories.png"
import groups from "../../../../images/groups.png"
import image from "../../../../images/image.png"
import pages from "../../../../images/pages.png"
import maryam from "../../../../images/pic1.jpeg"
 
class LeftSidePanel extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[]
     }
     getData=()=>{
        let jsondata=[
            {
                "image":maryam,
                "text":"Maryam Saddiqa"
            },
            {
                "image":covid,
                "text":"Covid-information center"
            },
            {
                "image":memories,
                "text":"Memories"
            },
            {
                "image":groups,
                "text":"Friends"
            },
            {
                "image":pages,
                "text":"your pages"
            },
            {
                "image":image,
                "text":"Your Images"
            }
        ];
        this.setState({data:jsondata});
     }
      componentDidMount(){
        this.getData();
      }

    render() { 
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>

                    ))
                }
                
               
                
            
            
            
            </div>
         );
    }
}
 
export default LeftSidePanel;