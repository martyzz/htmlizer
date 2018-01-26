import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { CUSTOM_NODE_TYPE } from "../../../../constants";

export default ComposedElement => {
  class ElementWithDraggable extends Component {
    render() {
      const { connectDragSource, node } = this.props;

      return connectDragSource(
        <div>
          <ComposedElement {...node} />
        </div>,
        {
          dropEffect: "copy"
        }
      );
    }
  }
  ElementWithDraggable.propTypes = {
    node: PropTypes.shape({ tagName: PropTypes.string }).isRequired,
    connectDragSource: PropTypes.func.isRequired
  };

  const nodeSpec = {
    beginDrag: componentProps => ({
      node: { ...componentProps.node, id: uuidv1() }
    })
  };

  const nodeCollect = connect => ({
    connectDragSource: connect.dragSource()
  });

  ElementWithDraggable = DragSource(CUSTOM_NODE_TYPE, nodeSpec, nodeCollect)(
    ElementWithDraggable
  );

  return ElementWithDraggable;
};
