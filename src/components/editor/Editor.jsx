import React, { Component } from "react";
import SplitPane from "react-split-pane";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PaneWrapper from "./PaneWrapper";

import CodePane from "./panes/code/CodePane";
import VisualPane from "./panes/visual/VisualPane";
import RenderPane from "./panes/render/RenderPane";
import ElementsPane from "./panes/elements/ElementsPane";
import PropertiesPane from "./panes/properties/PropertiesPane";

import "../../assets/sass/editor/Editor.sass";
import "../../assets/sass/editor/split-pane.sass";

class Editor extends Component {
  renderLeftSplitPane() {
    return (
      <SplitPane
        split="vertical"
        minSize={60}
        defaultSize="30%"
        primary="first"
      >
        <SplitPane
          split="horizontal"
          minSize={60}
          defaultSize="30%"
          primary="second"
        >
          <PaneWrapper name="Elements" fa="fa-th">
            <ElementsPane />
          </PaneWrapper>
          <PaneWrapper name="Properties" fa="fa-list">
            <PropertiesPane />
          </PaneWrapper>
        </SplitPane>
        <PaneWrapper
          name="Visual"
          fa="fa-tree"
          isContentFlex={true}
          disableContentScroll={true}
        >
          <VisualPane />
        </PaneWrapper>
      </SplitPane>
    );
  }

  renderRightSplitPane() {
    return (
      <SplitPane
        split="vertical"
        minSize={60}
        defaultSize="50%"
        primary="second"
      >
        <PaneWrapper name="Code" fa="fa-code">
          <CodePane />
        </PaneWrapper>
        <PaneWrapper name="Render" fa="fa-picture-o">
          <RenderPane />
        </PaneWrapper>
      </SplitPane>
    );
  }

  renderMainSplitPane() {
    return (
      <SplitPane
        split="vertical"
        minSize={60}
        defaultSize="50%"
        primary="second"
      >
        {this.renderLeftSplitPane()}
        {this.renderRightSplitPane()}
      </SplitPane>
    );
  }

  render() {
    return <div className="Editor">{this.renderMainSplitPane()}</div>;
  }
}

Editor = DragDropContext(HTML5Backend)(Editor);

export default Editor;
