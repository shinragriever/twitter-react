import React, { Component } from 'react';
import "./profile.css";
class Profile extends Component {
    render() {
        const {user} = this.props;
        const g = user.gender;
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
                </div> 
            </div>
        );
    }
}

export default Profile;