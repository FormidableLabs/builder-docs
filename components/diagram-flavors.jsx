import React from "react";
import Radium from "radium";

import settings from "../builder-variables";

import Flex from "./common/flex";

class Diagram extends React.Component {
  getRepoStyles(skewDegrees, bg) {
    return {
      wrapper: {
        margin: "1em 0 2em 0",
        padding: "2em 1em",

        background: bg,
        color: settings.darkGray,

        transform: "skewY(" + skewDegrees + ")"
      },
      content: {
        fontFamily: settings.monospace,
        fontSize: ".777777rem",

        transform: "skewY(-" + skewDegrees + ")"
      }
    };
  }

  getRepoHeadingStyles() {
    return {
      margin: "0 0 0.3em 0",
      fontWeight: "600",
      fontFamily: settings.monospace,
      fontSize: "1.25rem",
      lineHeight: "1.2",
      verticalAlign: "middle"
    };
  }

  getListStyles() {
    return {
      marginLeft: "20px"
    };
  }

  render() {
    const firstRepoStyles = this.getRepoStyles("6deg", "linear-gradient(-90deg, #eee, " + settings.white + " )");
    const secondRepoStyles = this.getRepoStyles("174deg", settings.white);
    const thirdRepoStyles = this.getRepoStyles("6deg", "linear-gradient(90deg, #eee, " + settings.white + " )");

    return (
      <Flex styleOverrides={{margin: "0 -5%"}}>
        <Flex.Item large={3}>
          <div style={firstRepoStyles.wrapper}>
            <div style={firstRepoStyles.content}>
            <p style={this.getRepoHeadingStyles()}>
              <i className="octicon octicon-repo" style={{verticalAlign: "middle"}}></i> strawberry
            </p>
            <ul style={this.getListStyles()}>
              <li>.babelrc</li>
              <li>.eslintrc-base</li>
              <li>.eslintrc-client</li>
              <li>.eslintrc-client-test</li>
              <li>.eslintrc-server</li>
              <li>webpack.config.coverage.js</li>
              <li>webpack.config.dev.js</li>
              <li>webpack.config.js</li>
              <li>webpack.config.test.js</li>
            </ul>
            </div>
          </div>
        </Flex.Item>
        <Flex.Item large={3}>
          <div style={secondRepoStyles.wrapper}>
            <div style={secondRepoStyles.content}>
            <p style={this.getRepoHeadingStyles()}>
              <i className="octicon octicon-repo" style={{verticalAlign: "middle"}}></i> blueberry
            </p>
            <ul style={this.getListStyles()}>
              <li>.babelrc</li>
              <li>.eslintrc-base</li>
              <li>.eslintrc-client</li>
              <li>.eslintrc-client-test</li>
              <li>.eslintrc-server</li>
              <li>webpack.config.coverage.js</li>
              <li>webpack.config.dev.js</li>
              <li>webpack.config.js</li>
              <li>webpack.config.test.js</li>
            </ul>
            </div>
          </div>
        </Flex.Item>
        <Flex.Item large={3}>
          <div style={thirdRepoStyles.wrapper}>
            <div style={thirdRepoStyles.content}>
            <p style={this.getRepoHeadingStyles()}>
              <i className="octicon octicon-repo" style={{verticalAlign: "middle"}}></i> chocolate
            </p>
            <ul style={this.getListStyles()}>
              <li>.babelrc</li>
              <li>.eslintrc-base</li>
              <li>.eslintrc-client</li>
              <li>.eslintrc-client-test</li>
              <li>.eslintrc-server</li>
              <li>webpack.config.coverage.js</li>
              <li>webpack.config.dev.js</li>
              <li>webpack.config.js</li>
              <li>webpack.config.test.js</li>
            </ul>
            </div>
          </div>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Diagram;
