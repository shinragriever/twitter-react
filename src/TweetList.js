import React, { Component } from 'react';
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
class TweetList extends Component {
    deleteTweet(id) {
        this.props.deleteTweet(id);
        this.props.getTweets();
    }
   
    getUser(id, users){
        const username = users.filter(user => {return user.id == id})[0];
        const fullname = username.firstname + " " + username.lastname;
        return fullname;
    }
    render() {
        const {tweets, users, user} = this.props;
        let i = 1;
        return (
            <div className="container">
                    {tweets.slice(0).reverse().map(tweet => (
                        <div className="card mb-3" key={tweet.id} >
                        <div className="row no-gutters">
                        <div className="col-md-4">
                        {/* {(tweet.image) ? <img src={tweet.image} className="card-img" alt="..."/> : ""} */}
                        <Link to={ tweet.user === user.id ? "/myprofile" :"/user/" + tweet.user}>{i++}
                        <Avatar user={tweet.user} users={users}></Avatar>
                        </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            
                            <p className="card-text">{tweet.message}</p>
                            {(tweet.image) ? <img src={tweet.image} className="card-img" alt="..."/> : ""}
                            <p className="card-text"><small className="text-muted">{this.getUser(tweet.user, users)}</small></p>
                           { tweet.user === user.id ?
                                <button  onClick={() => this.deleteTweet(tweet.id)} className="btn btn-info btn-sm">delete post</button> : ""
                            }
                            </div>
                        </div>
                        </div>
                    </div>
                        ))}
            </div>
        );
    }
}

export default TweetList;