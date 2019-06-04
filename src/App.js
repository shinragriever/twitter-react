import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import MyProfile from "./MyProfile";
import "./login.css";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        users: [],
        user: "",
        tweets: [],
        login: false,
        userTweets: [],
        followers: [],
        following: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.getUserTweets = this.getUserTweets.bind(this);
}

componentWillMount(){
  this.getTweets();
  this.getUsers();
  
}

getUsers(){
  axios.get("https://moviedb.jnnck.be/users").then(response => {
     console.log(response.data)
    this.setState({
     users : response.data,
     user: response.data[0]
   })
     
     
 })
}
getTweets(){
  axios.get("https://moviedb.jnnck.be/posts").then(response => {
     
     this.setState({
      tweets : response.data
    })
      
      
  })
}
handleChange(event) {
 const id = event.target.value;
const user = this.state.users.filter(user => user.id == id)[0];
this.setState({user})

}

getUserTweets(){
  const userTweets = this.state.tweets.filter(tweet => {return tweet.user === this.state.user.id});
  this.setState({userTweets});
  this.getFollowers(this.state.user.id);
}

getFollowers(id){
  
  axios.get("https://moviedb.jnnck.be/users/"+id).then(response => {
     console.log(response.data)
     this.setState({followers: response.data.followers});
     this.setState({following: response.data.following});
   })
}


render(){
  const {user,users,login} = this.state;
  if(!login){
    return (
      
      <div className="card text-center" id="login">
      <div className="card-header">
        Twitter {user.id}
      </div>
      <div className="card-body">
      <select className="form-control" id="userSelect"  onChange={this.handleChange} value={user.id}>
         {users.map(user => (
      <option value={user.id} key={user.id}>{user.firstname} {user.lastname}</option>
         ))}
     
    </select>
    <div className="mt-3">
        <button className="btn btn-info " onClick={(e) => {this.setState({login: !login.value}); this.getUserTweets(); }}>Login</button>
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
      
<Route exact path="/" render={(props) => <div><Homepage tweets={this.state.tweets} users={users} {...props}></Homepage></div> } />
      {/* <Route path="/" exact component={Index}/> */}
      <Route path="/myprofile" 
      render={(props) => <div>
        <MyProfile user={this.state.user} 
                   userTweets={this.state.userTweets} 
                   followers={this.state.followers} 
                    following={this.state.following} {...props}></MyProfile></div>} />
      
    </div>
  </Router>
  );
}
}

export default App;

