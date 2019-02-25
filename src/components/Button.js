import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  renderButton(color) {
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
