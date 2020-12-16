import React from "react";

import "../styles/CreateTheme.css";

class CreateTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-theme-main">
        <div className="theme-step active">
          <div className="top">
            <div className="step-number">1</div>
            <div className="title">Step 1</div>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <div className="content">Color Picker Here</div>
          </div>
        </div>
        <div className="theme-step active">
          <div className="top">
            <div className="step-number">2</div>
            <div className="title">Step 1</div>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <div className="content">Font Picker</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTheme;
