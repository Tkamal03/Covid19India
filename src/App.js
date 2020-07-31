import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css"; // Bootstrap 4
import "./App.css"; // App Stylesheet

import Header from "./components/common/header";
import Footer from "./components/common/footer";

//import history from "./history";

import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import NotFound from "./components/notfound";
import State from "./components/state";

import Login from "./components/login";

class App extends React.Component {
  constructor() {
    super();
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <Router>
        <main className="App">
          <Header />
          <div
            className="content"
            style={{ minHeight: this.state.height - 57 }}
          >
            <div className="contentInner">
              <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route path="/state/:stateCode" component={State} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
