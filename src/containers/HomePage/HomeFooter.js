import React, { Component } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeFooter extends Component {
  render() {
    
        return (
      <div className="home-footer">
        <p>
          &copy; 2025 Booking Care More information, please visit my youtube channel.
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/"
          >
            {' '}
            &#8594; Click here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);