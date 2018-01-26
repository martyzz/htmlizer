import React, { Component } from "react";
import { connect } from "react-redux";

import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";

import { CODE_MIRROR_OPTIONS } from "../../../../constants";

import { codeUpdate } from "../../../../actions/codeActions";
import { visualBranchesUpdateFromCode } from "../../../../actions/visualActions";

import "../../../../assets/sass/editor/panes/CodePane.sass";

class CodePane extends Component {

  onBeforeChange(editor, data, code) {
    const { codeUpdate } = this.props;
    const { origin } = data;
    if (origin) codeUpdate(code);
  }

  onChange(editor, data, code) {
    const { visualBranchesUpdateFromCode } = this.props;
    const { origin } = data;
    if (origin) visualBranchesUpdateFromCode(code);
  }

  render() {
    const { code } = this.props;

    return (
      <div className="CodePane">
        <CodeMirror
          value={code}
          options={CODE_MIRROR_OPTIONS}
          onBeforeChange={this.onBeforeChange.bind(this)}
          onChange={this.onChange.bind(this)}
          editorDidMount={() => this.forceUpdate()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { code } = state;
  return { code };
};

const mapDispatchToProps = {
  codeUpdate,
  visualBranchesUpdateFromCode
};

CodePane = connect(mapStateToProps, mapDispatchToProps)(CodePane);

export default CodePane;
