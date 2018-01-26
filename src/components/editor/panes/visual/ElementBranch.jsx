import React from "react";
import PropTypes from "prop-types";

import formatAttributes from "../../../../utilities/formatters/formatAttributes";

const ElementBranch = ({ type, tagName, attributes }) => (
  <div className="ElementBranch">
    <span className="element">&lt;{tagName}/&gt;</span>
    <br />
    <span className="properties">{formatAttributes(attributes, 25)}</span>
  </div>
);

ElementBranch.propTypes = {
  tagName: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  )
};

export default ElementBranch;
