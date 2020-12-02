import React, {Component, useState} from "react";
import { Route, Switch, useLocation,BrowserRouter,Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <BrowserRouter>
               <LocationDisplay/>
               <link to="/">Home</link>
               <link to="/about">About</link>
               <Switch>         
               <div>You are on the about page</div>               
               <Route exact path="/about">
                       <div>You are on the about page</div>
                   </Route>
                   <Route exact path="/">
                       <Home/>
                   </Route>
                   
                   <Route path="*">
                       <div>No match</div>
                   </Route>
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}
function Home(){
    // console.log(useLocation());
    return <div>You are home</div>;
}
export function LocationDisplay(){
    const {pathname} = useLocation();
    return <div data-testid="location-display">{pathname}</div>;
}
export default App;
