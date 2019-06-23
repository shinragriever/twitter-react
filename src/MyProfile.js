import React, { Component } from 'react';
import MyProfileDetail from "./MyProfileDetail";
import Followers from "./Followers";
import Following from "./Following";
import MyProfileTweets from "./MyProfileTweets";
class MyProfile extends Component {
    componentWillMount(){
        this.props.getTweets();
    }

    render() {
        
        const {user, userTweets, followers, following, deleteTweet, getTweets} = this.props;
        
        return (
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-sm-4">
                        <div><MyProfileDetail user={user}></MyProfileDetail></div>
                        <div><Followers followers={followers}></Followers></div>
                        <div><Following following={following}></Following></div>
                        </div>
                    <div className="col-sm-8"><MyProfileTweets userTweets={userTweets} avatar={user.avatar}
                     deleteTweet={deleteTweet} getTweets={getTweets}></MyProfileTweets></div>
                </div>
                
            </div>
        );
    }
}

export default MyProfile;