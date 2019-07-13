import React from "react";
import { SocialIcon } from "react-native-elements";

import "./App.css";

function App() {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>

      <div className="App">
        <header className="App-header">
          <SocialIcon
            title="Sign In With Facebook"
            button={true}
            type="facebook"
            onPress={() => {}}
          />
        </header>
      </div>
    </>
  );
}

export default App;
