import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {

  return (
    <nav className="container-fluid navbar navbar-default navbar-fixed-top">
      <div>

        <ul className="nav navbar-nav">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ul>

        <div className="collapse navbar-collapse">
          <div className="nav navbar-nav">
            <div className="collapse navbar-collapse">
              <div className="container">
                <div className="row">
                  <div id="custom-search-input">
                    <div className="input-group">
                      <input type="text" className="  search-query form-control" placeholder="Search" size="100" />
                      <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                          <span className="glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <ul className="nav navbar-nav">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/profile">Profile</Link></li>
            <li className="notifications">
              <a href="#">
                <i className="glyphicon glyphicon-globe"></i>
                <span className="badge">2</span>
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Activity Log</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
};

export default Header;
