import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./profile.css";
class Following extends Component {
    render() {
        const {following} =this.props;
        const countfollowing = following.length;
        
        return (
            <div className="card text-white bg-light text-dark mt-3">
                
                <div className="card-body">
                    <h4>You have {countfollowing} following.</h4>
                    <div className="container">
                        <div className="row">
                            {following.map(follower => (
                                
                                <div key={ Math.random()} className="col-md-4 p-1">
                                    <Link to={"/user/"+follower.id}>
                                <img src={follower.avatar} alt={follower.firstname}/>
                                </Link>
                                </div>
                            ))}
                        </div>
                   </div>
                </div> 
            </div>
        );
    }
}

export default Following;