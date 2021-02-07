import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      Նո՜ւռ
    </div>
    <div className="content">
      <div className="inner">
        <h1>MINOOR</h1>
        <p>
          Here are represnted some of wooden pomegranates made by Armenian artists.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            How it started
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('variations')
            }}
          >
            Variations
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('inspiration')
            }}
          >
            Find inspiration
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contacts
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
