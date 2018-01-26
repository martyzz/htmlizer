import React, { Component } from "react";
import { connect } from "react-redux";

import AttributesProperties from "./AttributesProperties";
import ContentProperties from "./ContentProperties";
import TagNameProperties from "./TagNameProperties";

import branchFind from "../../../../utilities/branches/branchFind";

import {
  visualBranchesAttributesUpdate,
  visualBranchesContentsUpdate,
  visualBranchesTagNameUpdate
} from "../../../../actions/visualActions";

import "../../../../assets/sass/editor/panes/PropertiesPane.sass";

class PropertiesPane extends Component {
  onAttributesPropertiesKeyChange(key, index, attribute) {
    const { visualBranchesAttributesUpdate, branch } = this.props;

    visualBranchesAttributesUpdate(branch.id, index, {
      key,
      value: attribute.value
    });
  }

  onAttributesPropertiesValueChange(value, index, attribute) {
    const { visualBranchesAttributesUpdate, branch } = this.props;

    visualBranchesAttributesUpdate(branch.id, index, {
      key: attribute.key,
      value
    });
  }

  onContentPropertiesChange(content) {
    const { visualBranchesContentsUpdate, branch } = this.props;
    visualBranchesContentsUpdate(branch.id, content);
  }

  onTagNamePropertiesChange(tagName) {
    const { visualBranchesTagNameUpdate, branch } = this.props;
    visualBranchesTagNameUpdate(branch.id, tagName);
  }

  render() {
    const { branch } = this.props;

    return (
      <div className="PropertiesPane">
        {!branch && (
          <div>
            <br />Select a branch from visual
          </div>
        )}
        {branch &&
          (branch.type === "element" ? (
            <div>
              <TagNameProperties
                tagName={branch.tagName}
                onChange={this.onTagNamePropertiesChange.bind(this)}
              />
              <AttributesProperties
                attributes={branch.attributes}
                onKeyChange={this.onAttributesPropertiesKeyChange.bind(this)}
                onValueChange={this.onAttributesPropertiesValueChange.bind(
                  this
                )}
              />
            </div>
          ) : (
            <ContentProperties
              content={branch.content}
              onChange={this.onContentPropertiesChange.bind(this)}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visual: { branches, selectedId } } = state;

  return {
    branch: branchFind(branches, selectedId)
  };
};

const mapDispatchToProps = {
  visualBranchesAttributesUpdate,
  visualBranchesContentsUpdate,
  visualBranchesTagNameUpdate
};

PropertiesPane = connect(mapStateToProps, mapDispatchToProps)(PropertiesPane);

export default PropertiesPane;
