import React from "react";
import PropTypes from "prop-types";

import formatContent from "../../../../utilities/formatters/formatContent";

const TextBranch = ({ content }) => (
  <div className="TextBranch">
    <span className="text">{formatContent(content, 25)}</span>
  </div>
);

TextBranch.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextBranch;
