import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Modal from "react-modal";

import Header from "./header/Header";
import Editor from "./editor/Editor";

import Loader from "./persistance/Loader";
import NotFound from "./persistance/NotFound";

import "../assets/sass/App.sass";

import { persistanceLoadForParams } from "../actions/persistanceActions";

class App extends Component {
  renderMainComponent() {
    const { isLoading, notFound, match: { params } } = this.props;
    const { persistanceLoadForParams } = this.props;

    if (isLoading) {
      persistanceLoadForParams(params);
      return <Loader />;
    }

    if (notFound) {
      return <NotFound />;
    }

    return <Editor />;
  }

  render() {
    const { match: { params } } = this.props;

    return (
      <div className="App" ref={app => Modal.setAppElement(app)}>
        <Header params={params} />
        {this.renderMainComponent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { persistance: { isLoading, notFound } } = state;
  return {
    isLoading,
    notFound
  };
};

const mapDispatchToProps = {
  persistanceLoadForParams
};

App = withRouter(App);
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
