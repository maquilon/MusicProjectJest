import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">AMEX MUSIC</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className={(props.routing.pathname !== "/about-us") ? 'nav-item' : 'nav-item active'}>
              <Link className="nav-link" to="/about-us"> About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Header);