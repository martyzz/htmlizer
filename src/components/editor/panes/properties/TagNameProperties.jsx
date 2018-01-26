import React from "react";
import PropTypes from "prop-types";

const TagNameProperties = ({ tagName, onChange }) => {
  return (
    <table className="TagNameProperties">
      <thead>
        <tr>
          <th>Tag Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              value={tagName || ""}
              onClick={event => event.target.select()}
              onChange={({ target: { value: tagName } }) => onChange(tagName)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TagNameProperties.propTypes = {
  tagName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TagNameProperties;
