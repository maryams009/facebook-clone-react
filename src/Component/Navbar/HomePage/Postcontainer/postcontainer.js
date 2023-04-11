import React, { Component } from 'react';
import Post from './post';
import "./postcontainer.css";
class Postcontainer  extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[]
     }
     getData=()=>{
        let jsondata=[
            {
                "post-id":1,
                "user-id":1234,
                "user_img":"",
                "user_name":"Maryam Saddiqa",
                "description":"Loved this wallpaper",
                "post_img":"",
                "like":"25"
            },
            {
                "post-id":2,
                "user-id":12344,
                "user_img":"",
                "user_name":"Bareen Bilal",
                "description":"Autumn is around the corner",
                "post_img":"",
                "like":"100"
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
                        <Post object={item}/>

                    ))
                }
                
               
            </div>
            
          );
    }
}
 
export default Postcontainer ;