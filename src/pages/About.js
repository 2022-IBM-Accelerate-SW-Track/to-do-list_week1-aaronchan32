import React, { Component } from 'react';
import './About.css';
import aaronpfp from '../assets/aaronpfp.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={aaronpfp}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Aaron Chan</div>
            <div className="brief_description">
              <p>UCSD 25' | Math &amp; CS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
