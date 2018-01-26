import React, { Component } from "react";
import { connect } from "react-redux";

import branchesToRender, {
  RENDER_SCROLL_HEIGHT
} from "../../../../utilities/converters/branchesToRender";

import "../../../../assets/sass/editor/panes/RenderPane.sass";

class RenderPane extends Component {
  constructor(props) {
    super(props);

    this.state = { iframeHeight: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  iframeHeightAdjusted(iframeHeight) {
    this.setState({ iframeHeight });
  }

  componentWillMount() {
    window.addEventListener(
      "message",
      event => {
        const { data: { type, value } } = event;
        if (type && type === RENDER_SCROLL_HEIGHT) {
          this.iframeHeightAdjusted(value);
        }
      },
      false
    );
  }

  render() {
    const { src } = this.props;
    const { iframeHeight } = this.state;

    return (
      <div className="RenderPane">
        <iframe
          title="renderframe"
          src={src}
          height={iframeHeight + 32}
          frameBorder="0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-modals"
          scrolling="no"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visual: { branches } } = state;

  return {
    src: branchesToRender(branches)
  };
};

RenderPane = connect(mapStateToProps, null)(RenderPane);

export default RenderPane;
