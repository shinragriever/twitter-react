import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import MyProfile from "./MyProfile";
import OthersProfile from './OthersProfile';
import "./login.css";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        users: [],
        user: "",
        tweets: [],
        login: false,
        followingTweets: [],
        followers: [],
        following: [],
        followersOther: [],
        followingOther: [],
        activeUser: {},
        follow: []
    }
    this.handleChange = this.handleChange.bind(this);
        this.getTweets = this.getTweets.bind(this);
}

componentWillMount(){
  this.getTweets();
  this.getUsers();
}
getUsers(){
  axios.get("https://moviedb.jnnck.be/users").then(response => {
    this.setState({
     users : response.data,
     user: response.data[0]
   })
 })
}

 getTweets(){
  this.getFollowingTweets();
  axios.get("https://moviedb.jnnck.be/posts").then(response => {
    this.setState({tweets : response.data})
    const userTweets = this.state.tweets.filter(tweet => {return tweet.user === this.state.user.id});
    this.setState({userTweets});
    this.getFollowers(this.state.user.id);  
  })
  const following = this.state.following.map(function(item) {
    return item.id;
  });
  following.push(this.state.user.id);
  var followingTweets = this.state.tweets.filter((e) => following.includes(e.user));
  this.setState({followingTweets});
}

handleChange(event) {
  const id = event.target.value;
 // eslint-disable-next-line
  const user = this.state.users.filter(user => user.id == id)[0];
  this.setState({user})
}

getFollowingTweets(){
   axios.get("https://moviedb.jnnck.be/users/"+this.state.user.id).then(response => {
    this.setState({activeUser: response.data})
  })
}

 getFollowers(id){
  axios.get("https://moviedb.jnnck.be/users/"+id).then(response => {
     this.setState({followers: response.data.followers});
     this.setState({following: response.data.following});
     const following = response.data.following.map(function(item) {
        return item.id;});
        console.log("following:",following);
        this.setState({follow: following});
   })
}

deleteTweet(id){
  console.log(id)
  axios.delete("https://moviedb.jnnck.be/posts/"+id).then(response=> {
    this.getTweets();
  })
}

addTweet(message, image, user){
  if(!(message === "")){
    const tweet = {
      message : message,
      image: image,
      user: user.id
    }
    console.log("addTweet",tweet)
    axios.post("https://moviedb.jnnck.be/posts", tweet).then(response => {
      this.getTweets();
    })
  }else{
    console.log('posting failed')
  }
}

followUser(id, user){
  console.log("follow",id)
  console.log(user)
  axios.post("https://moviedb.jnnck.be/users/"+id+"/follow", {follower: user}).then(response => {
    console.log(response.data)
  })
}

unFollowUser(id,user){
  console.log("unfollow",id)
  console.log(user)
  axios.post("https://moviedb.jnnck.be/users/"+id+"/unfollow", {follower: user}).then(response => {
    console.log(response.data)
  })
}

render(){
  const {user,users,login} = this.state;
  if(!login){
    return (
      <div className="card text-center" id="login">
        <div className="card-header">Twitter {user.id}</div>
          <div className="card-body">
            <select className="form-control" id="userSelect"  onChange={this.handleChange} value={user.id}>
              {users.map(user => (
                <option value={user.id} key={user.id}>{user.firstname} {user.lastname}</option>
              ))}
            </select>
            <div className="mt-3">
              <button className="btn btn-info " onClick={(e) => {this.setState({login: !login.value}); this.getTweets(); }}>Login</button>
            </div>
          </div>
    </div>
    );

  }
    return (
      <Router> 
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link to="/"className="navbar-brand">TwitterApp</Link>
              <div> 
                <Link to="/myprofile" ><button className="btn btn-info mr-2">My Profile</button></Link> 
                <button className="btn btn-info" onClick={(e) => {this.setState({login: false}); console.log("logout", this.state.login)}}>Logout</button>
              </div>
            </div>
          </nav>
        
      <Route exact path="/" 
      render={(props) => <div>
        <Homepage tweets={this.state.tweets}
                  users={this.state.users} 
                  addTweet={this.addTweet} 
                  user={this.state.user} 
                  getTweets={this.getTweets} 
                  deleteTweet={this.deleteTweet}
                  {...props}></Homepage></div> } />
            {/* <Route path="/" exact component={Index}/> */}
      <Route path="/myprofile" 
      render={(props) => <div>
        <MyProfile  user={this.state.user} 
                    userTweets={this.state.userTweets}
                    getTweets={this.getTweets}
                    followers={this.state.followers} 
                    following={this.state.following}
                    deleteTweet={this.deleteTweet}
                    {...props}></MyProfile></div>} />
      <Route path="/user/:id"
      render={(props) => <div>
        <OthersProfile  user={this.state.users.filter(user =>{return user.id == props.match.params.id})[0]}
                        tweets={this.state.tweets.filter(tweet => {return tweet.user == props.match.params.id})}
                        loggedUser={this.state.user.id}  
                        follow={this.state.follow} 
                        followUser={this.followUser} 
                        unFollowUser={this.unFollowUser} 
                        getTweets={this.getTweets}
                       {...props}></OthersProfile></div>} />
    </div>
  </Router>
    );
  }
}

export default App;

