import React, { Component } from 'react';
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
class TweetList extends Component {
    getUser(id, users){
        const username = users.filter(user => {return user.id == id})[0];
        const fullname = username.firstname + " " + username.lastname;
        return fullname;
    }
    render() {
        const {tweets, users} = this.props;
        
        return (
            <div className="container">
                    {tweets.map(tweet => (
                        <div className="card mb-3" key={tweet.id} >
                        <div className="row no-gutters">
                        <div className="col-md-4">
                        {/* {(tweet.image) ? <img src={tweet.image} className="card-img" alt="..."/> : ""} */}
                        <Link to={"/user/" + tweet.user}>
                        <Avatar user={tweet.user} users={users}></Avatar>
                        </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            
                            <p className="card-text">{tweet.message}</p>
                            <p className="card-text"><small className="text-muted">{this.getUser(tweet.user, users)}</small></p>
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