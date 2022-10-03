import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <div
        data-thq="thq-dropdown"
        className="navigation-links-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links-dropdown-toggle uppercase"
        >
          <span className="navigation-links-text">Services</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle1"
            >
              <span className="navigation-links-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle2"
            >
              <span className="navigation-links-text2">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle3"
            >
              <span className="navigation-links-text3">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <Link to="/team" className="navigation-links-navlink uppercase">
        {props.text1}
      </Link>
      <div
        data-thq="thq-dropdown"
        className="navigation-links-thq-dropdown1 list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links-dropdown-toggle4 uppercase"
        >
          <span className="navigation-links-text4 uppercase">Results</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links-dropdown-arrow1"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links-icon2">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links-dropdown-list1"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown3 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle5"
            >
              <span className="navigation-links-text5">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown4 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle6"
            >
              <span className="navigation-links-text6">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links-dropdown5 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links-dropdown-toggle7"
            >
              <span className="navigation-links-text7">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <Link to="/software" className="navigation-links-navlink1 uppercase">
        {props.text3}
      </Link>
      <span className="navigation-links-text8 uppercase">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text4: 'Blog',
  text1: 'Team',
  text3: 'Software',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
