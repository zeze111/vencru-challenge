import React, { Component } from 'react';
import Modal from './Modal';

import logo from '../../assets/images/logo.png';

class MainContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: "hide-modal",
      alert: "hide-modal",
      saveAlert: "hide-modal",
      disabled: false
    }
  }

  showModal = () => {
    const css = (this.state.modal === "hide-modal") ? "modal" : "hide-modal";
    this.setState({ modal: css });
  }

  cancelModal = () => {
    this.setState({
      alert: "alert",
      disabled: true
    });
  }

  closeAlert = () => {
    this.setState({
      alert: "hide-modal",
      disabled: false
    })
  }

  closeModal = () => {
    this.setState({
      modal: "hide-modal",
      alert: "hide-modal",
      disabled: false
    });
  }

  saveFeedback = () => {
    this.setState({
      modal: "hide-modal",
      saveAlert: "success-alert",
      disabled: false
    });
  }

  render() {
    return (
      <main>
        <div className={this.props.activeMenu}>
          <div className="icon">
            <i className="fas fa-times-circle"></i>
          </div>
          <div>
            <h3>
              Join us in developing Vencru to better serve your growing business
            </h3>
          </div>
          <div>
            <img className="logo-img" src={logo} alt="Logo"></img>
          </div>
          <div>
            <p className="text">
              Collaborate on the evolution of Vencru by leaving feedback, suggesting,
              voting and commenting on ideas you believe in.
              </p>
          </div>
          <div className="button-div">
            <button className="feedback-btn" onClick={this.showModal}>
              Leave Feedback
          </button>
            <button className="portal-btn">
              Enter Ideas Portal
          </button>
            <div>
              <Modal
                modal={this.state.modal}
                alert={this.state.alert}
                disabled={this.state.disabled}
                cancelModal={this.cancelModal}
                closeModal={this.closeModal}
                closeAlert={this.closeAlert}
                saveFeedback={this.saveFeedback} />
            </div>
          </div>
          <div>
            <p className={this.state.saveAlert}>
              <i className="fas fa-check alert-icon"></i>
              Thank you for the feedback!</p>
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;
