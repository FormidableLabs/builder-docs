import React from "react";
import Radium from "radium";

import settings from "../builder-variables";

import Flex from "./common/flex";

class Diagram extends React.Component {
  getRepoStyles(skewDegrees, bg) {
    return {
      wrapper: {
        margin: "1em 0 2em 0",
        padding: "3em 1em",

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

  getRepoListStyles() {
    return {
      margin: "0 0 0 20px",
      display: "inline-block",

      textAlign: "left"
    };
  }

  getFlavorArchetypeStyles() {
    return {
      zIndex: "1",

      backgroundColor: settings.gray,
      color: settings.darkerJet,
      fontFamily: settings.monospace,
      fontSize: ".777777rem",
      textAlign: "center",

      margin: "-5em auto 2em",
      padding: "2em 1em",
      display: "block",
      width: "100%",
      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)"
    };
  }

  renderFlavorName(flavor) {
    return (
      <p style={this.getRepoHeadingStyles()}>
        <i className="octicon octicon-repo"></i> {flavor}
      </p>
    );
  }

  renderFlavorsList() {
    return (
      <ul style={this.getRepoListStyles()}>
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
    );
  }

  renderBuilderList() {
    return (
      <ul style={this.getRepoListStyles()}>
        <li>.builderrc</li>
      </ul>
    );
  }

  renderFlavorArchetype() {
    return (
      <div style={this.getFlavorArchetypeStyles()}>
        {this.renderFlavorName("flavor-archetype")}
        {this.renderFlavorsList()}
      </div>
    );
  }

  render() {
    const firstRepoStyles = this.getRepoStyles("9deg", "linear-gradient(-90deg, #eee, " + settings.white + " )");
    const secondRepoStyles = this.getRepoStyles("171deg", settings.white);
    const thirdRepoStyles = this.getRepoStyles("9deg", "linear-gradient(90deg, #eee, " + settings.white + " )");

    return (
      <Flex styleOverrides={{margin: "5em -5%"}}>
        <Flex.Item large={3}>
          <div style={firstRepoStyles.wrapper}>
            <div style={firstRepoStyles.content}>
              {this.renderFlavorName("strawberry")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Flex.Item>
        <Flex.Item large={3}>
          <div style={secondRepoStyles.wrapper}>
            <div style={secondRepoStyles.content}>
              {this.renderFlavorName("blueberry")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Flex.Item>
        <Flex.Item large={3}>
          <div style={thirdRepoStyles.wrapper}>
            <div style={thirdRepoStyles.content}>
              {this.renderFlavorName("chocolate")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Flex.Item>
        {this.props.archetype ? this.renderFlavorArchetype() : null}
      </Flex>
    );
  }
}

Diagram.propTypes = {
  archetype: React.PropTypes.bool
};

Diagram.defaultProps = {
  archetype: false
};

export default Diagram;
