import React from "react";
import PropTypes from "prop-types";
import withDraggable from "./withDraggable";

const TagElement = ({ tagName }) => (
  <div className="TagElement">&lt;{tagName}/&gt;</div>
);

TagElement.propTypes = {
  tagName: PropTypes.string.isRequired
};

export default withDraggable(TagElement);
