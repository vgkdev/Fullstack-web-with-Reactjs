import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div>
        <div className="section-share section-about">
          <div className="section-about-header">Truyền thông nói về ...</div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/ONEdrgpFW_4"
                title="Sự Thật Về Chuyện Trái Ngành Rẽ Ngang Qua Coder | Anh Cơ Khí Muốn Tự Học Từ Đầu Mất Bao Lâu ?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <p>Đây là một trang web</p>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
