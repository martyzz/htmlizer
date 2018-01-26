import React from "react";
import PropTypes from "prop-types";

import formatContent from "../../../../utilities/formatters/formatContent";

const CommentBranch = ({ content }) => (
  <div className="CommentBranch">
    <span className="comment">&lt;!--{formatContent(content, 18)}--&gt;</span>
  </div>
);

CommentBranch.propTypes = {
  content: PropTypes.string.isRequired
};

export default CommentBranch;
