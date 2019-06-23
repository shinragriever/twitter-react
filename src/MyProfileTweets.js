import React, { Component } from 'react';

class MyProfileTweets extends Component {
    

    deleteTweet(id) {
        this.props.deleteTweet(id);
        
        
    }
    getTweets(){
        this.props.getTweets();
    }
   


    render() {
        const {userTweets,avatar} = this.props;
        
        return (
            <div className="container">
                    {userTweets.slice(0).reverse().map(tweet => (
                        
                        <div className="card mb-3" key={tweet.id} >
                        <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            
                            <p className="card-text">{tweet.message}</p>
                            {(tweet.image) ? <img src={tweet.image} className="card-img" alt="..."/> : ""}
                            <p className="card-text"><small className="text-muted">{tweet.created_at}</small></p>
                            <button  onClick={() => this.deleteTweet(tweet.id)} className="btn btn-info btn-sm">delete post</button>
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