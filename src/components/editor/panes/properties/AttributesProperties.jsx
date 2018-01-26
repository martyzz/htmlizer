import React from "react";
import PropTypes from "prop-types";

const AttributesProperties = ({ attributes, onKeyChange, onValueChange }) => {
  return (
    <table className="AttributesProperties">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {attributes.map((attribute, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={attribute.key || ""}
                  onClick={event => event.target.select()}
                  onChange={({ target: { value: key } }) =>
                    onKeyChange(key, index, attribute)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={attribute.value || ""}
                  onClick={event => event.target.select()}
                  onChange={({ target: { value } }) => {
                    onValueChange(value, index, attribute);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

AttributesProperties.propTypes = {
  attributes: PropTypes.array.isRequired,
  onKeyChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default AttributesProperties;
