import React from "react";
import Radium, { Style } from "radium";

import Docs from "./docs";
import Hero from "./hero";
import { Header, Footer } from "formidable-landers";

import settings from "../builder-settings";
import theme from "../builder-theme";

class App extends React.Component {
  getBackgroundSkewStyles() {
    return {
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "100%",
      transformOrigin: "top left",
      transform: "skew(0deg, -24deg)",
      background: "linear-gradient( 0deg, " + settings.white + ", " + settings.gray + " )"
    };
  }

  getMainStyles() {
    return {
      zIndex: "0",
      position: "relative",
      margin: "0",
      padding: "0",
      width: "100%",
      background: settings.white
    };
  }

  render() {
    return (
      <div>
        <Header backgroundColor={settings.darkGray} />
        <Hero />
        <main style={this.getMainStyles()}>
          <div style={this.getBackgroundSkewStyles()}></div>
          <div>
            <h3>Simple multiproject management through composable npm task workflows.</h3>
            <p>
              npm is great for controlling a single repository’s dependencies and tasks. But what if you need <strong>shared infrastructure and configuration across multiple repos</strong>?
            </p>
          </div>
          <div className="Container">
            <div className="Copy">
              <Docs />
            </div>
          </div>
        </main>
        <Footer backgroundColor={settings.darkGray} styleOverrides={{margin: "0"}}/>
        <Style rules={theme} />
      </div>
    );
  }
}

export default App;
