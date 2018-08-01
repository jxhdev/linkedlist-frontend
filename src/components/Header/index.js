import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false
};

export default class Header extends Component {
  state = DEFAULT_STATE;

  handleSearch = e => {
    e.preventDefault();
    // TODO: search
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  render() {
    const { searchText, searchCategoryIdx } = this.state;
    const { searchCategories, displayName, profilePic } = this.props;
    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={i === searchCategoryIdx}
                  onChange={() => this.handleClick(i)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <div className="profile-area">
          <div class="dropdown">
            <img src={profilePic} alt="Profile" />

            <div>
              <span>{displayName}</span>
            </div>
            {/* <button class="dropbtn">Dropdown</button> */}
            <div class="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'people'],
  profilePic: UserProfilePlaceholder
};

Header.propTypes = {
  searchCategories: PropTypes.array,
  profilePic: PropTypes.string,
  displayName: PropTypes.string,
  currentUser: PropTypes.object
};
