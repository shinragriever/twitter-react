import React, { Component } from 'react';
import Tweet from "./Tweet";
import TweetList from "./TweetList";
class Homepage extends Component {
    componentWillMount(){
        this.props.getTweets();

    }
    render() {
        const {tweets,users, addTweet, user, getTweets, deleteTweet} = this.props;
       
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4"><
                        Tweet addTweet={addTweet} user={user} getTweets={getTweets} ></Tweet></div>
                    <div className="col-sm-8">
                        <TweetList tweets={tweets} users={users} user={user} getTweets={getTweets} 
                                                            deleteTweet={deleteTweet}></TweetList></div>
                </div>
            </div>
        );
    }
}

export default Homepage;