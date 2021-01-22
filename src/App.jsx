import Main from './cmp/Main'
import Liked from './cmp/Liked/Liked'
import Header from "./cmp/Header/Header"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Component} from "react"

export default class App extends Component {
    state = {
        liked: JSON.parse(localStorage.getItem('liked')) || []
    }
    setLike = (newLike)=>{
        this.setState({liked:newLike})
    }
    render() {
        return (
            <Router >
                <Header/>
                <Switch>
                    <Route path="/cat" exact><Main setLike={(newLike)=>this.setLike(newLike)} liked={this.state.liked}/></Route>
                    <Route path="/cat/liked" exact><Liked liked={this.state.liked}/></Route>
                </Switch>
            </Router>
        )
    }
}