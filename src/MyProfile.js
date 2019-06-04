import React, { Component } from 'react';
import Profile from "./Profile";
import Followers from "./Followers";
import Following from "./Following";
import MyProfileTweets from "./MyProfileTweets";
class MyProfile extends Component {
    
    render() {
        
        const {user, userTweets, followers, following} = this.props;
        
        return (
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-sm-4">
                        <div><Profile user={user}></Profile></div>
                        <div><Followers followers={followers}></Followers></div>
                        <div><Following following={following}></Following></div>
                        </div>
                    <div className="col-sm-8"><MyProfileTweets userTweets={userTweets}></MyProfileTweets></div>
                </div>
                
            </div>
        );
    }
}

export default MyProfile;