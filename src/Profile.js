import React, { Component } from 'react';
import "./profile.css";
class Profile extends Component {

    followUser(id, user){
        this.props.followUser(id, user);
        this.props.getTweets();
    }
    
    
    unFollowUser(id, user){
        this.props.unFollowUser(id, user);
        this.props.getTweets();
    }
    



    render() {
        const {user, follow, loggedUser} = this.props;
        const g = user.gender;
       console.log(follow.filter(number => number == user.id).length == 0 );
        return (
            <div className="card text-white bg-light text-dark">
                <div className="profileimg">
                    <img src={user.avatar} alt={user.firstname + " " + user.lastname} />
                </div>
                <div className="card-body">
                    <h3>{user.firstname} {user.lastname}</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">°{user.dateofbirth}</div>
                             <div className="col-sm-2"><i className={"fas fa-3x fa-"+(g === 'male'? "mars" : "venus")}></i></div>
                        </div>
                        
                    </div>
                   { follow.filter(number => number == user.id).length == 0 ? <div className="text-right mt-3">
                        <button className="btn btn-info btn-small" onClick={() => this.followUser(this.props.user.id, loggedUser)}>Follow</button>
                        </div> : <div className="text-right mt-3">
                        <button className="btn btn-info btn-small" onClick={() => this.unFollowUser(this.props.user.id, loggedUser)}>Unfollow</button>
                        </div>}
                    
                </div> 
            </div>
        );
    }
}

export default Profile;