import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../../assets/sass/editor/PaneWrapper.sass";

let PaneWrapper = ({
  children,
  name,
  fa,
  isContentFlex,
  disableContentScroll
}) => {
  const contentClassnames = classnames([
    "content",
    { "is-flex": isContentFlex },
    { "scroll-disabled": disableContentScroll }
  ]);

  const faClassnames = classnames(["fa", fa]);

  return (
    <div className="PaneWrapper">
      <div className="title">
        <i className={faClassnames} /> {name}
      </div>
      <div className={contentClassnames}>{children}</div>
    </div>
  );
};

PaneWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  fa: PropTypes.string.isRequired,
  isContentFlex: PropTypes.bool,
  disableContentScroll: PropTypes.bool
};

PaneWrapper.defaultProps = {
  isContentFlex: false,
  disableContentScroll: false
};

export default PaneWrapper;
