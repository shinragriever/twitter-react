import React, { Component } from 'react';

class Tweet extends Component {
    
    addTweet(){
        const message = document.querySelector("#message").value;
        const image = document.querySelector("#image").value;
        this.props.addTweet(message,image,this.props.user);
        document.querySelector("#message").value="";
        document.querySelector("#image").value="";
          this.props.getTweets();
    }
    
    
    render() {
        return (
            
            <div className="card text-white bg-light text-dark">
                <div className="card-header">Tweet</div>
                    <div className="card-body">
                        <label>Message</label>
                        <textarea className="form-control" id="message" placeholder="Tweet here..." ></textarea>
                      <label>Image URL (optional)</label>
                      <input type="text" className="form-control" id="image"/>
                      <button className="btn btn-info form-control mt-3" onClick={() => this.addTweet()}>Tweet</button>
                    </div>
                
            </div>
            
        );
    }
}

export default Tweet;