import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import State from "./state";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact";

import history from "./history";

class Content extends React.Component {
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
      <Router history={history}>
        <Header />
        <div className="content" style={{ minHeight: this.state.height - 57 }}>
          <div className="contentInner">
            <Route path="/" exact component={Home} />
            <Route path="/state/:id" component={State} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default Content;
