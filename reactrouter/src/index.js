import  React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from "react-router-dom";


//Components
import Home from "./components/home";
import Profile from "./components/profile";
import Posts from "./components/posts";
import Contact from "./components/contact";


const App = ()=>{
    return(
        <div>
         
            <BrowserRouter>
                   
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/contact" component={Contact} />

                    </div>
            </BrowserRouter>
           
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
