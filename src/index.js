import React, { Component, StrictMode } from "react";
import ReactDOM, { render } from "react-dom";
import PropTypes from "prop-types";

import App from "./App";

const rootElement = document.getElementById("root");

class RepoContainer extends Component {
  render() {
    return React.createElement(
      "div",
      { className: RepoContainer },
      React.createElement("h2", { className: "hello" }, this.props.userName),
      this.props.children
    );
  }
}

class RepoContainerText extends Component {
  render() {
    return React.createElement("h3", {}, "Your Repositories");
  }
}

class RepoContainerCount extends Component {
  render() {
    return React.createElement("h3", {}, this.props.repoCount);
  }
}

class NewRepoButton extends Component {
  render() {
    return React.createElement("a", { href: "google.com" }, "New Repository");
  }
}

const reactElem = React.createElement(
  RepoContainer,
  {
    userName: "Hello Mark"
  },
  React.createElement(RepoContainerText, {}),
  React.createElement(RepoContainerCount, { repoCount: "190" }, null),
  React.createElement(NewRepoButton, {}, null)
);

render(reactElem, rootElement);

//render(<App />, rootElement);
