import React from "react";
import Radium, { Style } from "radium";

import Diagram from "./diagram-flavors";
import Docs from "./docs";
import Hero from "./hero";
import { Header, Footer } from "formidable-landers";

import settings from "../builder-variables";
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
      padding: "0 0 2em 0",
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
          <div className="Container">
            <h3 className="Headline">
              Simple multiproject management through composable npm task workflows.
            </h3>
            <div className="Focus">
              <p>
                <code>npm</code> is great for controlling a single repository’s dependencies and tasks. But what if you need <strong>shared infrastructure and configuration across multiple repos</strong>?
              </p>
            </div>
            <Diagram />
            <div className="Focus">
              <p>
                Builder is a meta tool for controlling npm workflows. If you’re working on multiple similar repos, it allows you to <strong>define tasks and dependencies in a single shared source of truth</strong>.
              </p>
            </div>
            <Diagram />
            <div className="Focus">
              <p>
                Or, if you’re working in a single repo, it allows you to dramatically simplify your <code>package.json</code>. Either way, it keeps you close to vanilla npm—you don’t need to buy into a whole new build philosophy to start benefiting from builder today.
              </p>
            </div>
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
