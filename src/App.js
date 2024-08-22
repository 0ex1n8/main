import { HashRouter, Route, Switch } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/project">
                            <Project />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
