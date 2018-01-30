import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Modal from "react-modal";

import ModalContent from "./ModalContent";

import { persistanceSaveForParams } from "../../actions/persistanceActions";

import "../../assets/sass/header/Header.sass";

const modalStyle = {
  overlay: {
    position: "fixed",
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    top: "20px",
    left: "20%",
    right: "20%",
    bottom: "20px",
    border: "none",
    background: "#1F363D",
    color: "#CFE0C3",
    borderRadius: "0px"
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHelpOpen: false
    };
  }

  onSave() {
    const { params, persistanceSaveForParams } = this.props;
    persistanceSaveForParams(params);
  }

  onHelp() {
    this.setState({ isHelpOpen: true });
  }

  onHelpClose() {
    this.setState({ isHelpOpen: false });
  }

  renderHelpModal() {
    const { isHelpOpen } = this.state;

    return (
      <Modal
        isOpen={isHelpOpen}
        style={modalStyle}
        onRequestClose={this.onHelpClose.bind(this)}
        shouldCloseOnOverlayClick={true}
      >
        <ModalContent />
      </Modal>
    );
  }

  render() {
    const { isLoading, isSaving, notFound } = this.props;

    return (
      <div className="Header">
        <div className="start">
          <div className="item logo" />
          {!isLoading &&
            !notFound &&
            !isSaving && (
              <div className="item button" onClick={this.onSave.bind(this)}>
                <i className="fa fa-floppy-o" />
                <span>Save</span>
              </div>
            )}
          {isSaving && (
            <div className="item button">
              <i className="fa fa-circle-o-notch fa-spin" />
              <span>Saving ...</span>
            </div>
          )}
        </div>
        <div className="end">
          <div className="item button" onClick={this.onHelp.bind(this)}>
            <i className="fa fa-info-circle" />
            <span>Help</span>
          </div>
        </div>
        {this.renderHelpModal()}
      </div>
    );
  }
}

Header.propTypes = {
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { persistance: { isLoading, isSaving, notFound } } = state;

  return {
    isLoading,
    isSaving,
    notFound
  };
};

const mapDispatchToProps = {
  persistanceSaveForParams
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
