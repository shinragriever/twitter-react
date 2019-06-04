import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        return (
            
            <div className="card text-white bg-light text-dark">
                <div className="card-header">Tweet</div>
                    <div className="card-body">
                        <label>Message</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="Tweet here..." ></textarea>
                      <label>Image URL (optional)</label>
                      <input type="text" className="form-control"/>
                      <button className="btn btn-info form-control mt-3">Tweet</button>
                    </div>
                
            </div>
            
        );
    }
}

export default Tweet;