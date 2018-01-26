import React, { Component } from "react";
import { connect } from "react-redux";

import TagElement from "./TagElement";
import ContentElement from "./ContentElement";
import ElementsFilter from "./ElementsFilter";

import elementsFilter from "../../../../utilities/filters/elementsFilter";

import "../../../../assets/sass/editor/panes/ElementsPane.sass";

class ElementsPane extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="ElementsPane">
        <ElementsFilter />
        {items.map((item, index) => (
          <div key={index} className="Element">
            {item.type === "element" ? (
              <TagElement node={item} />
            ) : (
              <ContentElement node={item} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { elements: { items, filterText } } = state;

  return {
    items: elementsFilter(items, filterText)
  };
};

const mapDispatchToProps = {};

ElementsPane = connect(mapStateToProps, mapDispatchToProps)(ElementsPane);

export default ElementsPane;
