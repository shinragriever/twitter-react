import React, { Component } from 'react';
import Tweet from "./Tweet";
import TweetList from "./TweetList";
class Homepage extends Component {
    render() {
        const {tweets,users} = this.props;
        
        return (
            <div className="container mt-3">
                <div className="row">
                <div className="col-sm-4"><Tweet></Tweet></div>
                <div className="col-sm-8"><TweetList tweets={tweets} users={users}></TweetList></div>
                </div>
            </div>
        );
    }
}

export default Homepage;