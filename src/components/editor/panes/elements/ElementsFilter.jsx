import React, { Component } from "react";
import { connect } from "react-redux";

import { elementsFilterTextUpdate } from "../../../../actions/elementsActions";

class ElementsFilter extends Component {
  onChange({ target: { value: filterText } }) {
    const { elementsFilterTextUpdate } = this.props;
    elementsFilterTextUpdate(filterText);
  }

  render() {
    const { filterText } = this.props;

    return (
      <div className="ElementsFilter">
        <input
          value={filterText}
          type="text"
          placeholder="Search..."
          onChange={this.onChange.bind(this)}
          onClick={event => event.target.select()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { elements: { filterText } } = state;
  return { filterText };
};

const mapDispatchToProps = {
  elementsFilterTextUpdate
};

ElementsFilter = connect(mapStateToProps, mapDispatchToProps)(ElementsFilter);

export default ElementsFilter;
