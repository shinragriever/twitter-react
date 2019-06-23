import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        const {users,user} =this.props;
        const avatar = users.filter(users => {return user === users.id})
        return (
            <div>
                <img src={avatar[0].avatar} className="img-card"  alt="avatar" width="50%"/>
                
            </div>
        );
    }
}

export default Avatar;