import React from 'react';
import watermark from '../../assets/images/watermark.png';

export default (props) => (
  <div className={props.modal}>
    <div className="modal-content">
      <p className="modal-title">Feedback</p>
      <textarea
        className="textarea"
        type="text"
        name="feedback"
        disabled={props.disabled}
        placeholder="Please share your comments or suggestions">
      </textarea>
      <button
        className="cancel-btn"
        disabled={props.disabled}
        onClick={props.cancelModal}>
        Cancel
      </button>
      <button
        className="save-btn"
        onClick={props.saveFeedback}
        disabled={props.disabled}>
        Save
      </button>
      <p className="copyright"> Powered by
      <img className="watermark-img" src={watermark} alt="Watermark"></img>
      </p>
      <div className={props.alert}>
        <p> Are you sure you want to cancel?</p>
        <button
          className="yes-btn"
          onClick={props.closeModal}>
          Yes
        </button>
        <button
          className="no-btn"
          onClick={props.closeAlert}>
          No
      </button>
      </div>
    </div>
  </div>
);
