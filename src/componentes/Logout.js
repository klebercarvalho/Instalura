import { Component } from "react";
import { browserHistory } from "react-router";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("auth-token");
    browserHistory.push("/?msg=Logout");
  }

  render() {
    return null;
  }
}
