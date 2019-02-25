import React from "react";

import ColorContext from "../context/ColorContext";
import { LanguageStore } from "../context/LanguageContext";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="negative">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
