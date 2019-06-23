import React, { Component } from 'react';
import Profile from "./Profile";
import Followers from "./Followers";
import Following from "./Following";
import MyProfileTweets from "./MyProfileTweets";
import axios from 'axios';
class OthersProfile extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            login: true,
            userTweets: [],
            followers: [],
            following: [],
            
        }
    
        // this.handleChange = this.handleChange.bind(this);
        // this.getUserTweets = this.getUserTweets.bind(this);
    }
    componentWillMount(){
        this.getFollower(this.props.user.id);
        

      }
    getFollower(id){
        axios.get("https://moviedb.jnnck.be/users/"+id).then(response => {
            this.setState({followers: response.data.followers});
            this.setState({following: response.data.following});
           
          })
        };
    render() {
        
        const {user, tweets} = this.props;
        console.log(tweets);
        
        return (
            <div className="container mt-5">
                 
                 <div className="row">
                     <div className="col-sm-4">
                         <div><Profile user={user}></Profile></div>
                         <div><Followers followers={this.state.followers}></Followers></div>
                         <div><Following following={this.state.following}></Following></div>
                         </div>
                         <div className="col-sm-8"><MyProfileTweets userTweets={tweets} avatar={user.avatar}></MyProfileTweets></div>
                 </div>
                
            </div>
        );
    }
}

export default OthersProfile;