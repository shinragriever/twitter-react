import React, { Component } from 'react';

class MyProfileTweets extends Component {
    render() {
        const {userTweets} = this.props;
        
        return (
            <div className="container">
                    {userTweets.map(tweet => (
                        
                        <div className="card mb-3" key={tweet.id} >
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            {(tweet.image) ? <img src={tweet.image} className="card-img" alt="..."/> : ""}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            
                            <p className="card-text">{tweet.message}</p>
                            <p className="card-text"><small className="text-muted">{tweet.created_at}</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                        ))}
            </div>
        );
    }
}

export default MyProfileTweets;