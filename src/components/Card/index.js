import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../images/company_placeholder.png';
import { Link } from 'react-router-dom';
import './style.css';
import imageurl from '../../images/user_placeholder.png';

class Card extends Component {
  render() {
    let cardDisplay;
    if (this.props.type === 'jobs') {
      const job = this.props.data;
      cardDisplay = (
        <div className="Card">
          <div className="img-job-info">
            <img className="Card-img" src={image} alt="company-img" />
            <div className="job-info">
              <p id="company">
                {job.title}{' '}
                <Link to="#">
                  <strong>@{job.company}</strong>
                </Link>
              </p>

              <p id="sal-eq">
                {job.salary} | {job.equity}
              </p>
            </div>
          </div>
          <button className="applyButton">Apply</button>
        </div>
      );
    }

    if (this.props.type === 'user-results') {
      if (this.props.user) {
        const user = this.props.user;
        const imgURL = user.photo ? user.photo : imageurl;
        cardDisplay = (
          <div className="Card">
            <div className="img-job-info">
              <img className="Card-img" src={imgURL} alt="user-img" />
              <div className="job-info">
                <p id="user-result-info">
                  {user.first_name} {user.last_name}
                </p>
                {user.current_company ? (
                  <Link to="#">
                    <strong>@{user.current_company}</strong>
                  </Link>
                ) : (
                  'Unemployed'
                )}
              </div>
            </div>
          </div>
        );
      } else {
        cardDisplay = <h2>No Results</h2>;
      }
    }

    if (this.props.type === 'company-results') {
      if (this.props.company) {
        const company = this.props.company;
        const imgURL = company.photo ? company.photo : imageurl;
        cardDisplay = (
          <div className="Card">
            <div className="img-job-info">
              <img className="Card-img" src={imgURL} alt="company-img" />
              <div className="job-info">
                <p id="company-result-info">{company.name}</p>

                <Link to="#">
                  <strong>{company.name}</strong>
                </Link>
                <p>Email: {company.email}</p>
              </div>
            </div>
          </div>
        );
      } else {
        cardDisplay = <h2>No Results</h2>;
      }
    }

    return <div>{cardDisplay}</div>;
  }
}

Card.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object
};
export default Card;
