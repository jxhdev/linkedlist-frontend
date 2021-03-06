import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
class HomeContent extends Component {
  render() {
    return (
      <div>
        <div className="feed">
          <h1 className="home-results">
            <i className="material-icons ">&#xe85d;</i>JOBS
          </h1>
          {this.props.content}
        </div>
      </div>
    );
  }
}

HomeContent.propTypes = {
  currentUser: PropTypes.object
};
export default HomeContent;
