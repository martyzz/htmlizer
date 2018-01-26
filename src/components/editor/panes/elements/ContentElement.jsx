import React from "react";
import PropTypes from "prop-types";
import withDraggable from "./withDraggable";

const ContentElement = ({ type }) => (
  <div className="ContentElement">{type}</div>
);

ContentElement.propTypes = {
  type: PropTypes.oneOf(["text", "comment"]).isRequired
};

export default withDraggable(ContentElement);
