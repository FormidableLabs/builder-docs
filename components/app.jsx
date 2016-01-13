import React from "react";
import Radium, { Style } from "radium";

import Docs from "./docs";
import { Header, Footer } from "formidable-landers";

import settings from "../builder-settings";
import theme from "../builder-theme";

class App extends React.Component {
  getHeroStyles() {
    return {
      position: "relative",
      margin: "0 auto 25% auto",
      padding: "200px 0 0",
      backgroundColor: "#0b0b0b",
      background: "#0b0b0b url('./static/bg.png') top center repeat-x"
    };
  }

  getSkewStyles(transform, bgColor, top) {
    return {
      zIndex: "0",
      position: "absolute",
      top: top ? top : "40%",
      left: "0",
      right: "0",
      height: "120%",
      transformOrigin: "top left",
      transform: transform,
      backgroundColor: bgColor
    };
  }

  getBackgroundSkewStyles(transform) {
    return {
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "100%",
      transformOrigin: "top left",
      transform: transform,
      background: "linear-gradient( 0deg, " + settings.white + ", " + settings.gray + " )"
    };
  }

  getInstallerStyles() {
    return {
      zIndex: "1",
      margin: "0",
      position: "relative",
      textAlign: "center"
    };
  }

  getInstallerHeadingStyles() {
    return {
      backgroundColor: settings.gold,
      color: settings.jet,
      display: "inline-block",
      fontFamily: settings.monospace,
      fontSize: "1.5rem",
      margin: "0",
      padding: "1em 2em",
      textAlign: "center"
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
        <div style={this.getHeroStyles()}>
          <div style={this.getSkewStyles("skew(0deg, 15deg)", settings.jet)}></div>
          <h1 style={{margin: "0 auto 2em", zIndex: "1", position: "relative", width: "65%", maxWidth: "995px"}}>
            <img src="./static/logotype-builder.svg" alt="Builder" />
          </h1>
          <div style={this.getInstallerStyles()}>
            <h2 style={this.getInstallerHeadingStyles()}>npm install builder</h2>
          </div>
        </div>
        <main style={this.getMainStyles()}>
          <div style={this.getBackgroundSkewStyles("skew(0deg, -24deg)")}></div>
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
