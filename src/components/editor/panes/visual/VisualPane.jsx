import React, { Component } from "react";
import { connect } from "react-redux";
import { SortableTreeWithoutDndContext as SortableTree } from "react-sortable-tree";
import classnames from "classnames";

import { CUSTOM_NODE_TYPE } from "../../../../constants";

import {
  visualBranchesUpdate,
  visualSelectedIdUpdate,
  visualBranchesRemove,
  visualBranchesCopy
} from "../../../../actions/visualActions";
import { codeUpdateFromBranches } from "../../../../actions/codeActions";

import ElementBranch from "./ElementBranch";
import TextBranch from "./TextBranch";
import CommentBranch from "./CommentBranch";

import "../../../../assets/sass/editor/panes/VisualPane.sass";

class VisualPane extends Component {
  componentDidMount() {
    const {
      branches,
      visualBranchesUpdate,
      codeUpdateFromBranches
    } = this.props;
    visualBranchesUpdate(branches);
    codeUpdateFromBranches(branches);
  }

  onChange(branches) {
    const { visualBranchesUpdate, codeUpdateFromBranches } = this.props;
    visualBranchesUpdate(branches);
    codeUpdateFromBranches(branches);
  }

  createTitleNode(node) {
    const { type } = node;

    switch (type) {
      case "element":
        return <ElementBranch {...node} />;
      case "text":
        return <TextBranch {...node} />;
      case "comment":
        return <CommentBranch {...node} />;
      default:
        throw new Error("Type of node was not recognized.");
    }
  }

  onNodeClicked(node) {
    const { visualSelectedIdUpdate } = this.props;
    const { id } = node;
    visualSelectedIdUpdate(id);
  }

  render() {
    const { branches, selectedId } = this.props;

    return (
      <div className="VisualPane">
        <SortableTree
          treeData={branches}
          onChange={this.onChange.bind(this)}
          rowHeight={42}
          dndType={CUSTOM_NODE_TYPE}
          onMoveNode={({ prevPath, node }) => {
            if (!prevPath) {
              this.props.visualSelectedIdUpdate(node.id);
            }
          }}
          generateNodeProps={({ node }) => {
            return {
              onClick: () => this.onNodeClicked(node),
              className: classnames([
                { "is-selected": node.id === selectedId }
              ]),
              title: this.createTitleNode(node),
              buttons: [
                <button
                  className="control"
                  onClick={event => {
                    event.stopPropagation();
                    this.props.visualBranchesCopy(node.id);
                  }}
                >
                  <i className="fa fa-files-o" />
                </button>,
                <button
                  className="control"
                  onClick={event => {
                    event.stopPropagation();
                    this.props.visualBranchesRemove(node.id);
                  }}
                >
                  <i className="fa fa-trash" />
                </button>
              ]
            };
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visual: { branches, selectedId } } = state;

  return {
    branches,
    selectedId
  };
};

const mapDispatchToProps = {
  visualBranchesUpdate,
  visualSelectedIdUpdate,
  visualBranchesRemove,
  visualBranchesCopy,
  codeUpdateFromBranches
};

VisualPane = connect(mapStateToProps, mapDispatchToProps)(VisualPane);

export default VisualPane;
