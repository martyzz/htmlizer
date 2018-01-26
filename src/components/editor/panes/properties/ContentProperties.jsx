import React from "react";
import PropTypes from "prop-types";

const ContentProperties = ({ content, onChange }) => {
  // do this prettier
  return (
    <table className="ContentProperties">
      <thead>
        <tr>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <textarea
              value={content}
              onChange={({ target: { value: content } }) => onChange(content)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ContentProperties.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ContentProperties;
