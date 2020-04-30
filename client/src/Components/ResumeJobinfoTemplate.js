import "../CSS/ResumeJobinfoTemplate.css";

import React, { Component } from "react";

export default class ResumeJobTemplate extends Component {
  render() {
    return (
      <div className="resume-jobinfo-wrapper">
        <div className="resume-bold resume-margin">{this.props.jobdate}</div>
        <div className="resume-jobinfo">
          <div className="resume-bold ">{this.props.organisation}</div>
          <div className="resume-normal">{this.props.jobtitle}</div>
          <div className="resume-italic">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
